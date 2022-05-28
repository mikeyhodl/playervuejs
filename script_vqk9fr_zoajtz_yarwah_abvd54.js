new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "CBN Gospel",
          artist: "CBN",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645186169/yadra2zdwceh_res4qw.png",
          source: "https://streams.cbnradio.com/gospel-128K?app=tunein",
          url: "https://www1.cbn.com/",
          favorited: true
        },
        {
          name: "Premier Gospel",
          artist: "Premier",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1648022007/logod_szisi6.jpg",
          source: "https://audio-edge-hy4wy.blr.d.radiomast.io/bc0b65c9-472b-48b7-b9fc-3b3000ca5ac3",
          url: "https://www.premiergospel.org.uk/",
          favorited: true
        },
        {
          name: "Premier Praise",
          artist: "Premier",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1648021703/c300_ndjpk6.png",
          source: "https://audio-edge-hy4wy.blr.d.radiomast.io/4f0fe096-7e2a-4bf0-957f-6c46a866d9ea",
          url: "https://www.premierpraise.com/",
          favorited: true
        },
        {
          name: "Energy 98",
          artist: "181.fm",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645186615/c300_c2xkv9.png",
          source: "https://listen.181fm.com/181-energy98_128k.mp3",
          url: "https://181.fm",
          favorited: true
        },
        {
          name: "Gay FM",
          artist: "Gay FM",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1648019393/c300_c3vwwz.png",
          source: "https://icepool.silvacast.com/GAYFM.mp3",
          url: "http://www.gayfm.de/",
          favorited: true
        },
        {
          name: "Heart London",
          artist: "Heart London",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1648019052/c300_aem1tj.png",
          source: "https://media-ice.musicradio.com/HeartLondonMP3",
          url: "https://www.heart.co.uk/london/",
          favorited: true
        },
        {
          name: "Ibiza Global Radio",
          artist: "Ibiza Global Radio",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1646464398/c300_mrzscq.png",
          source: "https://listenssl.ibizaglobalradio.com:8024/stream/1/",
          url: "http://ibizaglobalradio.com/",
          favorited: true
        },
        {
         name: "Virgin Radio UK",
         artist: "Virgin Radio UK",
        cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1648018399/c300_xaioks.png",
         source: "https://radio.virginradio.co.uk/stream",
         url: "https://virginradio.co.uk/",
         favorited: true
         },
         {
          name: "Smooth Jazz 247",
          artist: "smoothjazz247",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1651743185/live.fm/c300_pxifge.png",
          source: "https://ais-sa5.cdnstream1.com/b75154_128mp3",
          url: "https://www.smoothjazz247.com/",
          favorited: true
        },
        {
          name: "Sensual World",
          artist: "181.fm",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645187786/screen-0.jpg_t9edcx.jpg",
          source: "https://listen.181fm.com/181-sensual_128k.mp3?noPreRoll=true",
          url: "https://181.fm",
          favorited: true
        },
        {
          name: "Smooth Jazz",
          artist: "101.ru",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1646467150/22e97e8c6220a6ca49dcdba429cc083f_mkdqfj.png",
          source: "https://pub0101.101.ru/stream/trust/mp3/128/31",
          url: "https://101.ru/radio/channel/31",
          favorited: true
        },
        {
          name: "Smooth Jazz Florida",
          artist: "Smooth Jazz Florida",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645187565/c300_ixeomv.png",
          source: "https://server.webnetradio.net/proxy/wsjf?mp=/1",
          url: "https://smoothjazzflorida.com/",
          favorited: true
        },
        {
          name: "Hot 108 Jamz",
          artist: "Hot 108",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645197813/logod_jggikb.png",
          source: "https://live.powerhitz.com/hot108?aw_0_req.gdpr=true",
          url: "https://www.hot108.com/",
          favorited: true
        },
        {
          name: "HitsRadio - HipHop/RNB",
          artist: "HitsRadio",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645788573/c300_nhphk0.png",
          source: "https://18103.live.streamtheworld.com/977_JAMZ.mp3",
          url: "https://hitsradio.com/",
          favorited: true
        },
        {
          name: "The Beat",
          artist: "181.fm",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645187786/screen-0.jpg_t9edcx.jpg",
          source: "https://listen.181fm.com/181-beat_128k.mp3",
          url: "http://www.181.fm",
          favorited: true
        },
        {
          name: "BBC Radio 1Xtra",
          artist: "BBC",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645790337/c300_td69ut.png",
          source: "https://stream.live.vc.bbcmedia.co.uk/bbc_1xtra?s=1645189970&e=1645204370&h=729b86c05057c8c99b3ed993666c5973",
          url: "https://www.bbc.co.uk/1xtra",
          favorited: true
        },
        {
          name: "Capital XTRA",
          artist: "Capital XTRA",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645790465/c300_zo6mhh.png",
          source: "https://media-ice.musicradio.com/CapitalXTRALondon",
          url: "https://www.capitalxtra.com",
          favorited: true
        },
        {
          name: "Capital FM UK",
          artist: "Capital FM UK",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645790822/c300_a4yn5r.png",
          source: "https://media-sov.musicradio.com/CapitalUKMP3",
          url: "https://www.capitalfm.com/digital",
          favorited: true
        },
        {
          name: "1.FM - ReggaeTrade",
          artist: "1.FM",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645787487/c300_qzla59.png",
          source: "https://strm112.1.fm/reggae_mobile_mp3",
          url: "http://www.1.fm/station/reggae",
          favorited: true
        },
        {
          name: "NRJ REGGAE",
          artist: "NRJ",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645787955/c300_kj2edz.png",
          source: "https://scdn.nrjaudio.fm/fr/30075/mp3_128.mp3?origine=radio.net&cdn_path=adswizz_lbs7&adws_out_a1&access_token=4936e191e1a54a8bb36b7a40dbe8d368",
          url: "http://www.nrj.fr/webradios",
          favorited: true
        },
        {
          name: "Slam! Juize",
          artist: "Slam!",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645210635/logod_qokkya.jpg",
          source: "https://22543.live.streamtheworld.com/WEB09_MP3_SC?dist=TUNEIN",
          url: "hhttps://www.slam.nl/",
          favorited: true
        },
        {
          name: "100hitz - Hip Hop",
          artist: "100hitz",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645211012/s111382d_rk9f7j.png",
          source: "https://pureplay.cdnstream1.com/6042_128.mp3",
          url: "http://www.100hitz.com/",
          favorited: true
        },
        {
          name: "Christian Life Radio",
          artist: "Communitynetradio",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645192362/s112984d_zuc7hu.png",
          source: "https://ice64.securenetsystems.net/CLR1MP3",
          url: "http://www.communitynetradio.org/christianliferadio",
          favorited: true
        },
        // {
        //   name: "Piga Mdomo",
        //   artist: "Suzziah",
        //   cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1651149491/images/artworks-000225157901-vcd960-t500x500_q2uiiu.jpg",
        //   source: "https://res.cloudinary.com/weknow-creators/video/upload/v1651149358/aob/Suzziah-Piga-Mdomo_mmtska.mp3",
        //   url: "https://mikeowino.live/",
        //   favorited: true
        // },
        {
          name: "Episode 786",
          artist: "CLUBLIFE by Tiesto",
          cover: "https://res.cloudinary.com/weknow-creators/image/upload/v1645256784/logod_zta9kj.jpg",
          source: "https://res.cloudinary.com/weknow-creators/video/upload/v1653724775/club%20life/e168a16951ef7437b95e3b4d22f2ca22.mp3_yq5ukr.mp3",
          url: "http://tiesto.com/radio/",
          favorited: true
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});