const proxy = [
  {
    context: ["/api"],
    target: "http://localhost:8080/",
    secure: false,
    pathRewrite: { "^/api": "" },
  },
];
module.exports = proxy;
