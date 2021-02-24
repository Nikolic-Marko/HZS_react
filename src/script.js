const loginUser = async (username, password) => {
  const form = new FormData()
  form.append('username', username)
  form.append('password', password)

  const request = new Request('http://localhost/hzsapi/api/login_user.php', {
    method: 'POST',
    body: form,
  })

  response = await fetch(request)
  json_data = await response.json()

  return json_data
}

// loginUser("bane", "123123").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("Greska prilikom izvrsavanja http zahteva: " + err);
// })

const getPosts = async (kategorija, id) => {
  let url

  if (id) {
    url = 'http://localhost/hzsapi/api/read_posts.php?id=' + id
  } else {
    kategorija
      ? (url =
          'http://localhost/hzsapi/api/read_posts.php?kategorija=' + kategorija)
      : (url = 'http://localhost/hzsapi/api/read_posts.php')
  }

  const request = new Request(url, {
    method: 'GET',
  })

  response = await fetch(request)
  json_data = await response.json()

  return json_data
}

getPosts()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    console.log('Greska prilikom izvrsavanja http zahteva: ' + err)
  })

const registerUser = async (username, password, datum_rodjenja, email) => {
  const form = new FormData()
  form.append('username', username)
  form.append('password', password)
  form.append('datum_rodjenja', datum_rodjenja)
  form.append('email', email)

  url = 'http://localhost/hzsapi/api/register_user.php'
  const request = new Request(url, {
    method: 'POST',
    body: form,
  })

  response = await fetch(request)
  json_data = await response.json()

  return json_data
}

// datum rodjenja mora biti u formatu YYYY-MM-DD
// registerUser("peraaaa", "peraperic", "2001-05-28", "peraperic@gmail.com").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("Greska prilikom izvrsavanja http zahteva: " + err);
// })

const insertPost = async (naslov, text, autor, kategorija) => {
  const form = new FormData()
  form.append('naslov', naslov)
  form.append('text', text)
  form.append('autor', autor)
  form.append('kategorija', kategorija)

  url = 'http://localhost/hzsapi/api/insert_post.php'
  const request = new Request(url, {
    method: 'POST',
    body: form,
  })

  response = await fetch(request)
  json_data = await response.json()

  return json_data
}

// insertPost("novi post", "neki tekst", "marko", "hakaton").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("Greska: " + err);
// })

const insertKomentar = async (autor, post_id, text) => {
  const form = new FormData()
  form.append('post_id', post_id)
  form.append('text', text)
  form.append('autor', autor)

  url = 'http://localhost/hzsapi/api/insert_komentar.php'
  const request = new Request(url, {
    method: 'POST',
    body: form,
  })

  response = await fetch(request)
  json_data = await response.json()

  return json_data
}

// insertKomentar("marko", 8, "prvi komentar na novom postu").then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log("Greska: " + err);
// })

export { loginUser, getPosts, registerUser, insertPost, insertKomentar }
