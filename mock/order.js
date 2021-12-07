export default {
    'post /api/order/lists': (req, res) => {
      setTimeout(() => {
        let data 
        if(req.body.pageNum <= 4){
          data = [
            {
              id: 1,
              img: 'http://p1.music.126.net/Sqb0F3FaNb1uUp6La0_Z-w==/109951166633292449.jpg',
              title: '东城民宿',
              info: '东城区交通方便',
              price: '100',
              createTime: '2020-07-05',
            },
            {
              id: 2,
              img: 'http://p1.music.126.net/2jaMT8fB3UHkhjuEiqUgUg==/109951166633480341.jpg',
              title: '西城民宿',
              info: '西城区山水怡情',
              price: '120',
              createTime: '2020-07-05',
            },
            {
              id: 3,
              img: 'http://p1.music.126.net/26jqdBa2PDU-JvK8fniqfw==/109951166633376569.jpg',
              title: '新区民宿',
              info: '新区民宿位置优越',
              price: '200',
              createTime: '2020-07-05',
            },
            {
              id: 4,
              img: 'http://p1.music.126.net/OiBlXR7DhCSsdhcx0laaUQ==/109951166633375354.jpg',
              title: '老城民宿',
              info: '老城区风景秀美',
              price: '220',
              createTime: '2020-07-05',
            },
            {
              id: 5,
              img: 'http://p1.music.126.net/Sqb0F3FaNb1uUp6La0_Z-w==/109951166633292449.jpg',
              title: '东城民宿',
              info: '东城区交通方便',
              price: '100',
              createTime: '2020-07-05',
            },
            {
              id: 6,
              img: 'http://p1.music.126.net/2jaMT8fB3UHkhjuEiqUgUg==/109951166633480341.jpg',
              title: '西城民宿',
              info: '西城区山水怡情',
              price: '120',
              createTime: '2020-07-05',
            },
            {
              id: 7,
              img: 'http://p1.music.126.net/26jqdBa2PDU-JvK8fniqfw==/109951166633376569.jpg',
              title: '新区民宿',
              info: '新区民宿位置优越',
              price: '200',
              createTime: '2020-07-05',
            },
            {
              id: 8,
              img: 'http://p1.music.126.net/OiBlXR7DhCSsdhcx0laaUQ==/109951166633375354.jpg',
              title: '老城民宿',
              info: '老城区风景秀美',
              price: '220',
              createTime: '2020-07-05',
            }
          ]
        }else{
          data = []
        }
       
        res.json({
          status: 200,
          data
        })
      }, 500);
    }
  };