
Vue.createApp({

  data() {
    return {
      activetab: "websiteDesign",
      portfolioWebs: [
        {
          // link: 'http://webtest3.sanlih.com.tw/',
          tit: '三立新聞網改版(尚未正式上線)',
          date: '2022/12',
          portfolioImg: 'img-webcover01.webp'
        },
        {
          link: 'https://acts.setn.com/event/newyear2023/',
          tit: '2023跨年晚會直播頁',
          date: '2022/12',
          portfolioImg: 'img-webcover03.webp'
        },
        {
          link: 'https://www.setn.com/elect/2022vote/index.aspx',
          tit: '2022九合一大選開票頁',
          date: '2022/10',
          portfolioImg: 'img-webcover02.webp'
        },
        {
          link: 'https://acts.setn.com/event/2022hotpot/index.html',
          tit: '今晚這鍋好活動頁',
          date: '2022/10',
          portfolioImg: 'img-webcover04.webp'
        },
        {
          link: 'https://event-dev.vidol.tv/Vidolghost/index.html',
          tit: '鬼滅之認台劇版活動頁',
          date: '2022/08',
          portfolioImg: 'img-webcover06.webp'
        },
        {
          link: 'https://acts.setn.com/event/2022summerdrinkparty/',
          tit: '這夏冷涼卡好活動頁',
          date: '2022/07',
          portfolioImg: 'img-webcover07.webp'
        },
        {
          link: 'https://acts.setn.com/event/2022classtest/index.html',
          tit: '看新聞聰明點活動頁',
          date: '2022/03',
          portfolioImg: 'img-webcover08.webp'
        },
        {
          link: 'https://acts.setn.com/event/2022hodala/',
          tit: '年終虎打啦!活動頁',
          date: '2022/01',
          portfolioImg: 'img-webcover09.webp'
        },
        {
          link: 'https://acts.setn.com/event/2021delicious10/',
          tit: '十全食美點餐機活動頁',
          date: '2021/10',
          portfolioImg: 'img-webcover11.webp'
        },
        {
          link: 'https://event-dev.vidol.tv/GoldenBell_56/',
          tit: '誰是金鐘56大贏家活動頁',
          date: '2021/08',
          portfolioImg: 'img-webcover12.webp'
        },
        {
          link: 'https://acts.setn.com/event/2021UFO/',
          tit: '世界幽浮日活動頁',
          date: '2021/07',
          portfolioImg: 'img-webcover10.webp'
        },
        {
          link: 'https://event.vidol.tv/Vstar/Aaron/?pk_vid=190e86445abbeb80162726426245a318',
          tit: '本月V劇星賴東賢活動頁',
          date: '2021/05',
          portfolioImg: 'img-webcover13.webp'
        },
      ],
      portfolioDesigns: [
        {
          link: 'https://www.behance.net/gallery/165412413/LOGO?share=1',
          tit: '重生福島福到標準字',
          date: '2022/11',
          portfolioImg: 'img-visualcover05.webp'
        },
        {
          link: 'https://www.behance.net/gallery/164773505/2022',
          tit: '2022九合一大選主視覺',
          date: '2022/11',
          portfolioImg: 'img-visualcover02.webp'
        },
        {
          link: 'https://www.behance.net/gallery/164765521/_',
          tit: '中秋節電子賀卡',
          date: '2022/09',
          portfolioImg: 'img-visualcover01.webp'
        },
        {
          link: 'https://www.behance.net/gallery/164772785/SETN',
          tit: 'SETN大政治標準字',
          date: '2022/11',
          portfolioImg: 'img-logocover04.webp'
        },
        {
          link: 'https://www.behance.net/gallery/164765033/_',
          tit: '樂齡高手標準字',
          date: '2022/08',
          portfolioImg: 'img-logocover02.webp'
        },
        {
          link: 'https://www.behance.net/gallery/164763561/_',
          tit: '祝你健康頻道標準字',
          date: '2021/11',
          portfolioImg: 'img-logocover01.webp'
        },
        {
          link: 'https://www.behance.net/gallery/164763741/Podcast',
          tit: '聽新聞Podcast標準字',
          date: '2021/11',
          portfolioImg: 'img-logocover03.webp'
        },
      ],
      portfolioProjects: [
        {
          link: 'https://acts.setn.com/event/2022moontest/index.html',
          tit: 'Xtars合作案 - 中秋大會烤',
          date: '2022/09',
          portfolioImg: 'img-webcover05.webp'
        },
        {
          link: 'https://acts.setn.com/event/goodlifewithyou/',
          tit: '長照專題 - 陪你好好活',
          date: '2022/02',
          portfolioImg: 'img-projcover01.webp'
        },
        {
          link: 'https://borderless.setn.com/',
          tit: '消失的國界 - 2030沉沒倒數',
          date: '2021/12',
          portfolioImg: 'img-projcover02.webp'
        },
      ],
      experienceWorks: [
        {
          tit: '網頁設計師',
          company: "三立新聞網股份有限公司",
          companyLink: 'https://www.setn.com/',
          date: '2020/11 - 至今',
          img: "img-cover01.webp",
          workList: '<ul>\
          <li class="work-content-title">工作內容：</li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">新聞網改版/子網站維運及更新/大型選舉開票網站\
                <ul class="work-tags">\
                  <li>網頁設計/HTML、Scss切版</li>\
                  <li>互動效果設計</li>\
                  <li>響應式RWD網頁</li>\
                  <li>跨部門開發協作及溝通</li>\
                </ul>\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
            <li class="work-list-item number-order">活動網頁/大事紀新聞專題頁\
                <ul class="work-tags">\
                  <li>HTML/SCSS/jQuery/Vue</li>\
                </ul>\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
            <li class="work-list-item number-order">配合組內設計師網頁切版\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">節目及影音素材製作物\
                <ul class="work-tags">\
                  <li>LOGO標準字設計</li>\
                  <li>影音SUPER</li>\
                  <li>節目廣宣素材製作</li>\
                </ul>\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">廣宣製作物/重大新聞專題頁/節慶電子賀卡\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">協助主管安排PT設計製作、工作進度追蹤\
              </li>\
            </ol>\
          </li>\
        </ul>'
        },
        {
          tit: '網頁設計',
          company: "利百加旅行社股份有限公司",
          companyLink: 'https://www.gabriel.com.tw/',
          date: '2020/03 - 2020/09 (7個月)',
          img: "img-cover02.webp",
          workList: '<ul>\
          <li class="work-content-title">工作內容：</li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">日本旅遊各線網站改版\
                <ul class="work-tags">\
                  <li>網頁視覺設計</li>\
                  <li>Boostrap切版</li>\
                  <li>旅遊商品行程上架</li>\
                </ul>\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">旅遊網誌網站改版</li>\
                <ul class="work-tags">\
                  <li>網頁設計+切版</li></li>\
                  <li>旅遊文案協助過搞潤飾</li>\
                </ul>\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">宣傳物視覺製作\
              </li>\
            </ol>\
          </li>\
        </ul>'
        },
        {
          tit: '平面設計與企劃',
          company: "協益旅行社股份有限公司",
          date: '2018/05 - 2019/11 (1年6個月)',
          img: "img-cover03.webp",
          workList: '<ul>\
          <li class="work-content-title">工作內容：</li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">旅遊網站視覺設計\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">旅遊行程企劃撰寫\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">平面宣傳製作物\
                <ul class="work-tags">\
                  <li>DM/EDM</li>\
                  <li>旅遊手冊製作</li>\
                </ul>\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">社群媒體經營管理\
                <ul class="work-tags">\
                  <li>facebook廣告投放</li>\
                  <li>Google關鍵字廣告投放</li>\
                  <li>社群貼文撰寫</li>\
                </ul>\
              </li>\
            </ol>\
          </li>\
          <li class="work-list-content">\
            <ol>\
              <li class="work-list-item number-order">廣告投放數據分析\
                <ul class="work-tags">\
                  <li>GA數據報表製作與分析</li>\
                </ul>\
              </li>\
            </ol>\
          </li>\
        </ul>'
        },
      ]
    }
  },
  methods: {
    toggleTab: function (n) {
      this.tab = [!1, !1, !1, !1, !1],
        this.tab[n] = !0
    }
  },
}).mount('#app');

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
$(document).ready(function () {
  $(function () {
    $("#gotop").click(function () {
      jQuery("html,body").animate({
        scrollTop: 0
      }, 500);
    });
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('#gotop').fadeIn("slow");
      } else {
        $('#gotop').stop().fadeOut("slow");
      }
    });
  });
});