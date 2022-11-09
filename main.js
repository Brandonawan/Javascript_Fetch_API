
        document.getElementById('getText').addEventListener('click', getText);
        document.getElementById('getUsers').addEventListener('click', getUsers);
        document.getElementById('getPost').addEventListener('click', getPost);
        document.getElementById('addPost').addEventListener('submit', addPost);

        function getText(){
            fetch('sample.txt')
            .then(function(res){
                return res.text();
            })
            .then(function(data){
                document.getElementById('output').innerHTML = data;
            })
            .catch(function(err){
                console.log(err)
            })
        }

        function getUsers(){
            fetch('users.json')
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                let output = `<h2>Users</h2>`;
                data.forEach(function(user){
                    output += `
                        <ul class="list-group mb-3">
                            <li class="list-group-item active">ID: ${user.id}</li>
                            <li class="list-group-item">Name: ${user.name}</li>
                            <li class="list-group-item">Email: ${user.email}</li>
                        </ul>
                    `;
                });
                document.getElementById('output').innerHTML = output;
            })
            .catch(function(err){
                console.log(err)
            })
        }

        function getPost(){
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                let output = `<h1>Posts</h1>`
                data.forEach(function(post){
                    output += `
                            <ul class="card">
                                <li class="card-body"><h2>${post.title}<h2></h3>
                                <li class="card-body"><p>${post.body}</p></li>
                            </ul>`
                });
                document.getElementById('output').innerHTML = output;
            })
            .catch(function(err){
                console.log(err)
            })

        }

        function addPost(e){
            e.preventDefault();

            let title = document.getElementById('title').value;
            let body = document.getElementById('body').value;

            fetch('https://jsonplaceholder.typicode.com/posts', {
                // Adding method type
                method: "POST",

                // Adding body or content to send
                body: JSON.stringify({
                    title: title,
                    body: body,
                }),
                // Adding headers to the request
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })

            // Converting to JSON
            .then(function(res){
                return res.json()
            })
            .then(function(data){
                console.log(data);
            });
            // .catch(function(err){
            //     console.log(err)
            // })

        }

