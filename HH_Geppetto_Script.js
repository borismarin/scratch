Simulation.addWatchLists([{name:"hhvars",variablePaths:["hhcell.electrical.SimulationTree.hhpop[0].v", "hhcell.electrical.SimulationTree.hhpop[0].spiking","hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.gDensity","hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q", "hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q","hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q"]}]);
Simulation.startWatch();
Simulation.start();


//Adding Plot 1

G.addWidget(Widgets.PLOT);

Plot1.setName("Hodgkin-Huxley Spiking Neuron");

options = {yaxis:{min:-.1,max:0.1},xaxis:{min:0,max:400,show:false}};

Plot1.setOptions(options);
Plot1.setPosition(113, 90);
Plot1.setSize(230,445)
Plot1.plotData(hhcell.electrical.SimulationTree.hhpop[0].v);
Plot1.plotData(hhcell.electrical.SimulationTree.hhpop[0].spiking);


G.wait(100);

G.addWidget(Widgets.PLOT);

options = {yaxis:{min:0,max:250},xaxis:{min:0,max:400,show:false}};

Plot2.setPosition(113, 336);
Plot2.setSize(245,445)
Plot2.setName("Conductance Density");
Plot2.setOptions(options);
Plot2.plotData(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.gDensity);

//Adding Plot 3

G.wait(100); 

G.addWidget(Widgets.PLOT);

var options = {yaxis:{min:0,max:1},xaxis:{min:0,max:400,show:false}};

Plot3.setOptions(options)
Plot3.setName("Gating Variables");
Plot3.setPosition(710,90);
Plot3.setSize(285,465)
Plot3.plotData(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q);
Plot3.plotData(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q);
Plot3.plotData(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q);

Plot3.setLegend(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.h.q,"The H.Q Variable");
Plot3.setLegend(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.naChans.na.m.q,"The M.Q Variable");
Plot3.setLegend(hhcell.electrical.SimulationTree.hhpop[0].bioPhys1.membraneProperties.kChans.k.n.q,"The N.Q Variable");

G.addWidget(Widgets.POPUP);
Popup1.setMessage("The Hodgkin-Huxley model (or conductance-based model) is a mathematical model that describes how action potentials in neurons are initiated and propagated. It is a set of nonlinear differential equations that approximates the electrical characteristics of excitable cells such as neurons.");
Popup1.setName("Description");
Popup1.setPosition(710,398);
Popup1.setSize(160,465)

window.setTimeout(function(){Simulation.addBrightnessFunction(hhcell.electrical, hhcell.electrical.SimulationTree.hhpop[0].v, function(x){return (x+0.06)/0.06;})},500);
