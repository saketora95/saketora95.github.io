function initialURLInput() {

    document.getElementById('source_url').value = window.location.href

    let submitBtn = document.getElementById('submit');

    submitBtn.onclick = function() {

    }

    let box = document.querySelector('.container');
    box.insertAdjacentHTML("afterend", "<div class='text-center mt-3'>container寬度：" + box.clientWidth + "px</div>" + "<div class='text-center mt-3'>網頁可見區域寬：" + document.body.clientWidth + "px</div>");

    let stru = [
        {
            label: '姓名',
            type: 'text',
            name: 'name',
            value: '',
            valid: 'required',
            option: '',
            width: '3'
        },
        {
            label: '網址',
            type: 'url',
            name: 'url',
            value: '',
            valid: '', //required
            option: '',
            width: '3'
        },
        {
            label: 'EMAIL',
            type: 'email',
            name: 'email',
            value: '',
            valid: '', //required
            option: '',
            width: '3'
        },
        {
            label: 'Password',
            type: 'password',
            name: 'password',
            value: '',
            valid: '', //required
            option: '',
            width: '3'
        },
        {
            label: '日期方塊',
            type: 'date',
            name: 'date',
            value: '',
            valid: '', //required
            option: '',
            width: '3'
        },
        {
            label: '年月方塊',
            type: 'month',
            name: 'month',
            value: '',
            valid: '', //required
            option: '',
            width: '3'
        },
        {
            label: '年週方塊',
            type: 'week',
            name: 'week',
            value: '',
            valid: '', //required
            option: '',
            width: '3'
        },
        {
            label: '顏色選擇器',
            type: 'color',
            name: 'color',
            value: '#000000',
            valid: '', //required
            option: '',
            width: '3'
        },
        {
            label: '數字方塊',
            type: 'number',
            name: 'number',
            value: '',
            valid: '', //required
            option: '',
            width: '3'
        },
        {
            label: '搜尋方塊',
            type: 'search',
            name: 'search',
            value: '',
            valid: '', //required
            option: '',
            width: '3'
        },
        {
            label: '單選',
            type: 'radio',
            name: 'radio',
            value: '',
            valid: 'required', //required
            option: '單選1|單選2|單選3|單選4|單選5',
            width: '12'
        },
        {
            label: '複選',
            type: 'checkbox',
            name: 'checkbox',
            value: '',
            valid: 'required', //required
            option: '複選1|複選2|複選3|複選4|複選5',
            width: '12'
        },
        {
            label: '下拉選單',
            type: 'select',
            name: 'select',
            value: '',
            valid: 'required', //required
            option: '下拉選單1|下拉選單2|下拉選單3|下拉選單4|下拉選單5',
            width: '6'
        },
        {
            label: '下拉選單(多選)',
            type: 'select_m',
            name: 'select_m',
            value: '',
            valid: 'required', //required
            option: '下拉選單(多選)1|下拉選單(多選)2|下拉選單(多選)3|下拉選單(多選)4|下拉選單(多選)5',
            width: '6'
        },
    ];
    let form_item = '';
    let option, option_item, checkbox_e;
    for (let i in stru) {
        if (stru[i]['type'] === 'text') { //簡答
        form_item += `
            <!-- input text 文字方塊(單行) -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
            </div>`;
        } else if (stru[i]['type'] === 'url') { //網址
        form_item += `
            <!-- input url 網址 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
            </div>`;

        } else if (stru[i]['type'] === 'email') { //EMAIL
        form_item += `
            <!-- input email EMAIL -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
            </div>`;
        } else if (stru[i]['type'] === 'password') { //password
        form_item += `
            <!-- input password 密碼 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
            </div>`;
        } else if (stru[i]['type'] === 'date') { //日期方塊
        form_item += `
            <!-- input date 日期方塊 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
            </div>`;
        } else if (stru[i]['type'] === 'month') { //年月方塊
        form_item += `
            <!-- input month 年月方塊 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
            </div>`;
        } else if (stru[i]['type'] === 'week') { //年週方塊
        form_item += `
            <!-- input week 年週方塊 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
            </div>`;
        } else if (stru[i]['type'] === 'color') { //顏色選擇器
        form_item += `
            <!-- input color 顏色選擇器 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
            </div>`;
        } else if (stru[i]['type'] === 'number') { //數字方塊
        form_item += `
            <!-- input number 數字方塊 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
            </div>`;
        } else if (stru[i]['type'] === 'search') { //搜尋方塊
        form_item += `
            <!-- input search 搜尋方塊 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label for="${stru[i]['name']}" class="form-label">${stru[i]['label']}</label>
            <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${stru[i]['value']}" class="form-control" id="${stru[i]['name']}" ${stru[i]['valid']}>
            </div>`;
        } else if (stru[i]['type'] === 'radio') { //
        options = stru[i]['option'].split('|');
        option_item = '';
        for (let j in options) {
            option_item += `
            <div class="form-check form-check-inline">
                <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${options[j]}" class="form-check-input" id="${stru[i]['name']}_${j}" ${stru[i]['valid']}>
                <label class="form-check-label" for="${stru[i]['name']}_${j}">${options[j]}</label>
            </div>
            `;
        }

        form_item += `
            <!-- 單選 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label class="form-label w-100">${stru[i]['label']}</label>
            ${option_item}
            </div>
        `
        } else if (stru[i]['type'] === 'checkbox') { //複選
        options = stru[i]['option'].split('|');
        option_item = '';
        valid = stru[i]['valid'] ? ` oninput="renderCheckbox('${stru[i]['name']}');"`: '';
        for (let j in options) {
            option_item += `
            <div class="form-check form-check-inline">
                <input type="${stru[i]['type']}" name="${stru[i]['name']}" value="${options[j]}" class="form-check-input ${stru[i]['name']}" id="${stru[i]['name']}_${j}" ${stru[i]['valid']} ${valid}>
                <label class="form-check-label" for="${stru[i]['name']}_${j}">${options[j]}</label>
            </div>
            `;
        }

        form_item += `
            <!-- 複選 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label class="form-label w-100">${stru[i]['label']}</label>
            ${option_item}
            </div>
        `;
        } else if (stru[i]['type'] === 'select') { //下拉選單
        options = stru[i]['option'].split('|');
        option_item = '';
        for (let j in options) {
            option_item += `
            <option value="${options[j]}">${options[j]}</option>
            `;
        }

        form_item += `
            <!-- 複選 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label class="form-label">${stru[i]['label']}</label>
            <select name="${stru[i]['name']}" class="form-select" id="${stru[i]['name']}" ${stru[i]['valid']}>
                ${option_item}
            </select>
            </div>
        `;
        } else if (stru[i]['type'] === 'select_m') { //下拉選單(複選)
        options = stru[i]['option'].split('|');
        option_item = '';
        for (let j in options) {
            option_item += `
            <option value="${options[j]}">${options[j]}</option>
            `;
        }

        form_item += `
            <!-- 複選 -->
            <div class="col-sm-${stru[i]['width']} mb-3">
            <label class="form-label">${stru[i]['label']}</label>
            <select name="${stru[i]['name']}" class="form-select" id="${stru[i]['name']}" multiple ${stru[i]['valid']}>
                ${option_item}
            </select>
            </div>
        `;
        }
    }
    let form_item_id = document.getElementById('form_item');
    form_item_id.innerHTML = form_item;

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