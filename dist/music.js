const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: '仰泳的鱼',
        artist: 'TAIBIAN',
        url: 'http://antiserver.kuwo.cn/anti.s?format=mp3|aac&rid=13844400&type=convert_url&response=res',
        cover: 'http://img3.kuwo.cn/star/albumcover/300/6/76/1410592419.jpg',
      }
    ]
});