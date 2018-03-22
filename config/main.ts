const config = {
  // port
  port: process.env.PORT || 3000,

  // database
  db: 'mongodb://127.0.0.1/node-blog',

  // test environment
  test_env: 'test',
  test_db: 'mongodb://127.0.0.1/node-blog-test',
  test_port: 3001
}

export default config