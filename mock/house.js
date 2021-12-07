export default {
    'post /api/house/search': (req, res) => {
      setTimeout(() => {
        let data 
        if(req.body.pageNum <= 4){
          data =  [
            {
                id: 1,
                img: 'http://p1.music.126.net/Sqb0F3FaNb1uUp6La0_Z-w==/109951166633292449.jpg',
                title: '东城民宿',
                info: '东城区交通方便',
                price: '100'
              },
              {
                id: 2,
                img: 'http://p1.music.126.net/2jaMT8fB3UHkhjuEiqUgUg==/109951166633480341.jpg',
                title: '西城民宿',
                info: '西城区山水怡情',
                price: '120'
              },
              {
                id: 3,
                img: 'http://p1.music.126.net/26jqdBa2PDU-JvK8fniqfw==/109951166633376569.jpg',
                title: '新区民宿',
                info: '新区民宿位置优越',
                price: '200'
              },
              {
                id: 4,
                img: 'http://p1.music.126.net/OiBlXR7DhCSsdhcx0laaUQ==/109951166633375354.jpg',
                title: '老城民宿',
                info: '老城区风景秀美',
                price: '220'
              },
              {
                id: 5,
                img: 'http://p1.music.126.net/Sqb0F3FaNb1uUp6La0_Z-w==/109951166633292449.jpg',
                title: '东城民宿',
                info: '东城区交通方便',
                price: '100'
              },
              {
                id: 6,
                img: 'http://p1.music.126.net/2jaMT8fB3UHkhjuEiqUgUg==/109951166633480341.jpg',
                title: '西城民宿',
                info: '西城区山水怡情',
                price: '120'
              },
              {
                id: 7,
                img: 'http://p1.music.126.net/26jqdBa2PDU-JvK8fniqfw==/109951166633376569.jpg',
                title: '新区民宿',
                info: '新区民宿位置优越',
                price: '200'
              },
              {
                id: 8,
                img: 'http://p1.music.126.net/OiBlXR7DhCSsdhcx0laaUQ==/109951166633375354.jpg',
                title: '老城民宿',
                info: '老城区风景秀美',
                price: '220'
              }
          ]
        }else{
          data = []
        }
        
        res.json({
          status: 200,
          data
        });
      }, 500);
      
    },
    'post /api/house/detail': (req, res) => {
      res.json({
        status: 200,
        data: {
          id: 8,
          banner: [
            'http://p1.music.126.net/2jaMT8fB3UHkhjuEiqUgUg==/109951166633480341.jpg',
            'http://p1.music.126.net/26jqdBa2PDU-JvK8fniqfw==/109951166633376569.jpg',
            'http://p1.music.126.net/OiBlXR7DhCSsdhcx0laaUQ==/109951166633375354.jpg',
          ],
          info: {
            title: '老城民宿',
            msg: '老城区风景秀美',
            price: '220',
            publishTime: 1595238771000,
            startTime: 1595238771000,
            endTime: 1597917171000,
          }
        }
      });
    },
    'post /api/comments/lists': (req, res) => {
      setTimeout(() => {
        let data;
        if (req.body.pageNum < 4) {
          data = [
            {
              id: 1,
              avatar: 'http://p1.music.126.net/Sqb0F3FaNb1uUp6La0_Z-w==/109951166633292449.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '房屋很满意'
            },
            {
              id: 2,
              avatar: 'http://p1.music.126.net/2jaMT8fB3UHkhjuEiqUgUg==/109951166633480341.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '空气清新'
            },
            {
              id: 3,
              avatar: 'http://p1.music.126.net/26jqdBa2PDU-JvK8fniqfw==/109951166633376569.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '态度温和'
            },
            {
              id: 4,
              avatar: 'http://p1.music.126.net/OiBlXR7DhCSsdhcx0laaUQ==/109951166633375354.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '早餐味道美'
            },
            {
              id: 5,
              avatar: 'http://p1.music.126.net/Sqb0F3FaNb1uUp6La0_Z-w==/109951166633292449.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '态度温和'
            },
            {
              id: 6,
              avatar: 'http://p1.music.126.net/2jaMT8fB3UHkhjuEiqUgUg==/109951166633480341.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '早餐味道美'
            },
            {
              id: 7,
              avatar: 'http://p1.music.126.net/26jqdBa2PDU-JvK8fniqfw==/109951166633376569.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '态度温和'
            },
            {
              id: 8,
              avatar: 'http://p1.music.126.net/OiBlXR7DhCSsdhcx0laaUQ==/109951166633375354.jpg',
              username: 'user',
              createTime: 1595238771000,
              info: '早餐味道美'
            },
          ]
        } else {
          data = [];
        }
        res.json({
          status: 200,
          data
        });
      }, 100);
    },
    'post /api/comments/add': (req, res) => {
      res.json({
        status: 200,
        data: 'ok'
      });
    }
  };