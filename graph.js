//-- lees nodes in
    import pandas as pdnodes = pd.read_csv('ASOIAF_nodes.csv')
    nodes = nodes['Id']
    num_nodes = nodes.shape[0]
    nodes

//-- lees edges in
    edges = pd.read_csv('ASOIAF_edges.csv',usecols=[0,1] )
    edges

//-- Visualiseer de eerste 10 nodes
    nodes_G = []
    for node in edges[:10]['Source']:
        if node not in nodes_G:
            nodes_G.append(node)
    for node in edges[:10]['Target']:
        if node not in nodes_G:
            nodes_G.append(node)

//-- Add nodes and edges into the graph
    dot = Digraph(comment='VIP graph')for i in range(len(nodes_G)):
    dot.node(nodes_G[i])for i in range(len(edges[:10])):
    edge = edges.iloc[i]
    dot.edge(edge['Source'], edge['Target'])

//-- Visualiseer
    dot.render('VIP-graph_10.gv', view=True)

//-- Alles
    dot = Digraph(comment='VIP graph')for i in range(num_nodes):
    dot.node(nodes[i])for i in range(len(edges)):
    edge = edges.iloc[i]
    dot.edge(edge['Source'], edge['Target'])dot.render('VIP-graph.gv', view=True)