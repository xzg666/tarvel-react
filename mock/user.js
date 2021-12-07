export default {
    'post /api/user/detail': (req, res) => {
      res.json({
        status: 200,
        data: {
          id: 10,
          username: '测试用户',
          avatar: 'http://p1.music.126.net/26jqdBa2PDU-JvK8fniqfw==/109951166633376569.jpg',
          tel: 123456789001,
          sign: '花桥流水'
        }
      });
    },
    'post /api/user/edit': (req, res) => {
      res.json({
        status: 200,
        data: 'ok'
      });
    },
    'post /api/user/login': (req, res) => {
      res.json({
        status: 200,
        data: {
          id: 100,
          username: 'admin'
        }
      });
    },
    'post /api/user/register': (req, res) => {
      res.json({
        status: 200,
        data: {
          id: 100,
          username: 'admin'
        }
      });
    }
  };