 const head = React.createElement("h1",{ id :"head1" },"hello React!!");

          const root = ReactDOM.createRoot(document.getElementById("root"));

          root.render(head)


const parent = React.createElement("div",{id:"parent"},
               [React.createElement("div",{id:"child1"},
                [(React.createElement("h1",{},"h1 tag")),React.createElement("h2",{},"h2 tag")])
               ,
               React.createElement("div",{id:"child2"},
                [ React.createElement("h1",{},"h1 tag"),React.createElement("h2",{},"h2 tag")]),
               ]);

          root.render(parent)