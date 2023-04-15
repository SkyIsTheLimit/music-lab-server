module.exports = function (app) {
  let session = {
    name: 'Chilling with Friends',
    users: [
      {
        id: 0,
        name: 'John Doe',
        color: 'red',
        points: [],
      },
      {
        id: 1,
        name: 'Jane Doe',
        color: 'green',
        points: [],
      },
      { id: 2, name: 'Bozo Doe', color: 'yellow', points: [] },
      { id: 3, name: 'Doremon Doe', color: 'blue', points: [] },
    ],
    color: 'bg-yellow-400',
  };

  app.get('/session/1', function (req, res) {
    res.send(session);
  });
};
