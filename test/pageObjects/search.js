const SELECTORS = {
  'search input': '#search-text',
  'search button': '#searchbutton',
  'search result': '#searchresult',
  'room serach button': '#box_rooms_search',
  'ทุกห้อง': '//*[@id="box_rooms"]/div[5]/div[5]/label',
  'กรุงโซล': '//*[@id="box_rooms"]/div[1]/div[3]/label',
  'การ์ตูน': '//*[@id="box_rooms"]/div[1]/div[5]/label',
  'จตุจักร': '//*[@id="box_rooms"]/div[2]/div[1]/label',
  'สีลม': '//*[@id="box_rooms"]/div[5]/div[1]/label',
  'สินธร': '//*[@id="box_rooms"]/div[4]/div[8]/label',
  'โต๊ะเครื่องแป้ง': '//*[@id="box_rooms"]/div[2]/div[8]/label',
  'ภูมิภาค': '//*[@id="box_rooms"]/div[3]/div[7]/label',
  'หอศิลป์': '//*[@id="box_rooms"]/div[5]/div[4]/label',
  'ห้องสมุด': '//*[@id="box_rooms"]/div[5]/div[3]/label',
  'บางรัก': '//*[@id="box_rooms"]/div[3]/div[4]/label',
  'ชายเรือน': '//*[@id="box_rooms"]/div[2]/div[4]/label',
  'ชายคา': '//*[@id="box_rooms"]/div[2]/div[5]/label',
  'สวนลุมพินี': '//*[@id="box_rooms"]/div[4]/div[7]/label',
  'บลูแพลนเน็ต': '//*[@id="box_rooms"]/div[3]/div[2]/label',
  'home menu': '//*[@id="pantipHeader"]/div/ul[1]/a[1]/li/span',
  'room menu': '#openCate',
  'tag menu': '//*[@id="pantipHeader"]/div/ul[1]/a[2]/li',
  'activity menu': '//*[@id="pantipHeader"]/div/ul[1]/a[3]/li',
  'other menu' : '#openOther',
  'create topic menu': '//*[@id="pt-log-out"]/a[1]/li',
  'login / register menu': '//*[@id="pt-log-out"]/a[2]/li',
  'ห้อง ก้นครัว': '//*[@id="pantipCategory_m"]/div/div[1]',
};

class Search {
 
  getPage() {
    return 'search';
  }

  getElement(ele) {
    let result;
    switch (ele) {
      case 'search result':
        if ($(SELECTORS[ele]).$('div').error?.error !== 'no such element') {
          result = $(SELECTORS[ele]).$('div').$('div').$('a').getHTML(false);
          const regx1 = /<span class="focus02-txt">/gi
          const regx2 = /<\/span>/gi
          result = result.replace(regx1, '');
          result = result.replace(regx2, '');
        } else {
          result = 'no such element';
        }

        break;
      default:
        result = $(SELECTORS[ele]);
        break;
    }
    return result;
  }

}

export default new Search();
