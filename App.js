/***
 *  <div class="parent">
        <div class="child">
            <h1>I'm a h1 tag</h1>
        </div>
    </div>
    <div class="parent2">
        <div class="child">
            <h1>I'm a h1 tag</h1>
        </div>
    </div>

    createElement(object) => HTML(browser Support)
*/
const parent = React.createElement('div', { id: "parent" },
    [React.createElement('div', { id: "child" },
        [React.createElement('h1', {}, "I am a h1 tag"),
        React.createElement('h2', {}, "I am a h2 tag")]
    )],
    React.createElement('div', { id: "parent2" },
    [React.createElement('div', { id: "child" },
        [React.createElement('h1', {}, "I am a h1 tag"),
        React.createElement('h2', {}, "I am a h2 tag")]
    )]
))

//jsx

// const heading = React.createElement('h1',
//     { id: 'heading', xyz: "hello" },
//     'Hello World Using React!!');
//     console.log(heading) //return object
//this root is the place where all the react program will run
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)
