function initialURLInput() {

    document.getElementById('source_url').value = window.location.href

    let submitBtn = document.getElementById('submit');

    submitBtn.onclick = function() {

    }

    let box = document.querySelector('.container');
    box.insertAdjacentHTML("afterend", "<div class='text-center mt-3'>container寬度：" + box.clientWidth + "px</div>" + "<div class='text-center mt-3'>網頁可見區域寬：" + document.body.clientWidth + "px</div>");


      // 整理出來的結構資料
      // stru[0]['label']
      let stru = [{
        label: '繳費單位',
        type: 'select',
        name: 'unit',
        value: '',
        valid: '', //required
        option: '玉山|國泰|台新|電費|水費',
        width: '3'
      },
      {
        label: '繳費日期',
        type: 'date',
        name: 'date',
        value: '',
        valid: 'required', //required
        option: '',
        width: '3'
      },
      {
        label: '繳費金額',
        type: 'text',
        name: 'money',
        value: '',
        valid: 'required', //required
        option: '',
        width: '3'
      },
      {
        label: '其他',
        type: 'text',
        name: 'ps',
        value: '',
        valid: '', //required
        option: '',
        width: '3'
      },
      {
        label: 'op',
        type: 'hidden',
        name: 'op',
        value: 'payment',
        valid: '', //required
        option: '',
        width: '3'
      },
      {
        label: '返回網址',
        type: 'hidden',
        name: 'callback_url',
        value: '',
        valid: '', //required
        option: '',
        width: '3'
      }
    ];
    let form_item = document.getElementById('form_item');
    let form_item_html = options_html = '';
    let options;
    // let a = "123abc";
    // let c = "000"+ a +"qwe" ;
    // console.log(c);
    for (let i in stru) {
      if (stru[i]['type'] === 'text' ||
        stru[i]['type'] === 'url' ||
        stru[i]['type'] === 'email' ||
        stru[i]['type'] === 'password' ||
        stru[i]['type'] === 'date' ||
        stru[i]['type'] === 'month' ||
        stru[i]['type'] === 'week' ||
        stru[i]['type'] === 'number' ||
        stru[i]['type'] === 'color' ||
        stru[i]['type'] === 'search'
      ) { //簡答
        form_item_html += `
          <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
          </div>`;
      } else if (stru[i]['type'] === 'radio') {
        options = stru[i]['option'].split('|');
        options_html = '';
        /*
          ['雞腿', '排骨', '招牌']
          options[0]
          options[1]
          options[2]
          options[j]
        */
        for (let j in options) {
          // 三元運算
          let required = (j == '0') ? stru[i]['valid'] : '';
          options_html += `
            <div class="form-check form-check-inline">
              <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${options[j]}" class="form-check-input" id="${stru[i]['name']}_${j}" ${required}>
              <label class="form-check-label" for="${stru[i]['name']}_${j}">${options[j]}</label>
            </div>`;
        };

        // console.log(options_html);
        //跑迴圈
        //選項html
        form_item_html += `
          <div class="col-sm-${stru[i]['width']} mb-3">
            <label class="form-label w-100">${stru[i]['label']}</label>
            ${options_html}
          </div>`;

      } else if (stru[i]['type'] === 'select') {
        // 1.首先替換 變數
        // 2.將 stru[i]['option'] => 陣列 ['下拉選單1', '下拉選單2', '下拉選單3']
        // 3.跑迴圈
        // stru[i]['option'] => '行政|訓導|總務'
        options = stru[i]['option'].split('|');
        options_html = '';
        for (let j in options) {
          options_html += `
            <option value="${options[j]}">${options[j]}</option>`;
        }

        form_item_html += `
          <div class="col-sm-${stru[i]['width']} mb-3">
            <label class="form-label">${stru[i]['label']}</label>
            <select name="${stru[i]['name']}" class="form-select" id="${stru[i]['name']}" ${stru[i]['valid']}>
             ${options_html}
            </select>
          </div>`;
      } else if (stru[i]['type'] === 'select_m') {
        // 1.首先替換 變數
        // 2.將 stru[i]['option'] => 陣列 ['下拉選單1', '下拉選單2', '下拉選單3']
        // 3.跑迴圈
        // stru[i]['option'] => '行政|訓導|總務'
        options = stru[i]['option'].split('|');
        options_html = '';
        for (let j in options) {
          options_html += `
            <option value="${options[j]}">${options[j]}</option>`;
        }

        form_item_html += `
          <div class="col-sm-${stru[i]['width']} mb-3">
            <label class="form-label">${stru[i]['label']}</label>
            <select name="${stru[i]['name']}" class="form-select" id="${stru[i]['name']}" ${stru[i]['valid']} multiple >
             ${options_html}
            </select>
          </div>`;
      } else if (stru[i]['type'] === '段落') {

        form_item_html += `
          <div class="col-sm-${stru[i]['width']} mb-3">
            <label class="form-label">${stru[i]['label']}</label>
            <textarea name="${stru[i]['name']}" class="form-control" id="${stru[i]['name']}" rows="5" ${stru[i]['valid']}>${stru[i]['value']}</textarea>
          </div>`;
      } else if (stru[i]['type'] === 'checkbox') {
        options = stru[i]['option'].split('|');
        options_html = '';
        //三元運算
        let required = stru[i]['valid'] ? `oninput="renderCheckbox('${stru[i]['name']}')"` : '';

        for (let j in options) {
          options_html += `
            <div class="form-check form-check-inline">
              <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${options[j]}" class="form-check-input ${stru[i]['name']}" id="${stru[i]['name']}_${j}" ${stru[i]['valid']} ${required}>
              <label class="form-check-label" for="${stru[i]['name']}_${j}">${options[j]}</label>
            </div>`;
        };

        form_item_html += `
          <div class="col-sm-${stru[i]['width']} mb-3">
            <label class="form-label w-100">${stru[i]['label']}</label>
            ${options_html}
          </div>`;
      } else if (stru[i]['type'] === 'hidden') {
        form_item_html += `
          <input type="hidden" name="${stru[i]['name']}" value="${stru[i]['value']}" id="${stru[i]['name']}">`;
      }

    }
    form_item.innerHTML = form_item_html;


}

function renderCheckbox(name){
    if(isAtLeastOneChecked(name)){
        removeRequired(name);
    }else{
        setRequired(name);
    }
    }

    function isAtLeastOneChecked(name) {
    let checkboxes = Array.from(document.getElementsByName(name));
    return checkboxes.some(function(item) {
        return item.checked;
    });
    }

    function removeRequired(name){
    let checkboxes = Array.from(document.getElementsByName(name));
    for(let i in checkboxes){
        checkboxes[i].removeAttribute('required');
    }
    }
    function setRequired(name){
    let checkboxes = Array.from(document.getElementsByName(name));
    for(let i in checkboxes){
        checkboxes[i].setAttribute('required', true);
    }
    }
    // function isAtLeastOneChecked(name) {
    //   let checkboxes = Array.from(document.getElementsByName(name));
    //   let checkboxes_swith = checkboxes.some(function(item) {
    //     return item.checked;
    //   });
    // }