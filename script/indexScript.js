const TargetURL = 'https://script.google.com/macros/s/AKfycbyfFC46klPsp8IyXT-m_vkoNmgDv_HVaiF6hkNi0ucz-jipO5Db9JG8fBKcrSDA0Bk/exec'

function initialURLInput() {

    document.getElementById('GASForm').setAttribute('action', TargetURL)
    let current_url = window.location.href
    document.getElementById('callback_url').value = current_url
    document.getElementById('home_url').value = current_url.replace(window.location.pathname, '')

    $.ajax({
        url: TargetURL,
        data: {
            op: 'get_contact_stru'
        },
        method: 'GET',
        dataType: 'json',
        async: true,

        // 發送前
        beforeSend: function() {

        },

        // 成功
        success: function(result) {
            createForm('GASForm_ObjectArea', result)
            document.getElementById('loaderArea').style.display = 'none'
        },

        // 失敗
        error: function(error) {
            console.log(error)
        }
    });

    let submitBtn = document.getElementById('submit');

    submitBtn.onclick = function() {}

}

function createForm(target_id, form_stru) {

    let form_item = document.getElementById(target_id);
    let form_item_html = options_html = '';
    let options;

    for (let i in form_stru) {
        if (form_stru[i]['type'] === 'text' ||
            form_stru[i]['type'] === 'url' ||
            form_stru[i]['type'] === 'email' ||
            form_stru[i]['type'] === 'password' ||
            form_stru[i]['type'] === 'date' ||
            form_stru[i]['type'] === 'month' ||
            form_stru[i]['type'] === 'week' ||
            form_stru[i]['type'] === 'number' ||
            form_stru[i]['type'] === 'color' ||
            form_stru[i]['type'] === 'search'
        ) { //簡答
            form_item_html += `
                <div class="col-sm-${form_stru[i]['width']} mb-3">
                    <label for="${form_stru[i]['name']}" class="form-label">${form_stru[i]['label']}</label>
                    <input type="${form_stru[i]['type']}" name="${form_stru[i]['name']}" value="${form_stru[i]['value']}" class="form-control" id="${form_stru[i]['name']}" ${form_stru[i]['valid']}>
                </div>`;

        } else if (form_stru[i]['type'] === 'radio') {
            options = form_stru[i]['option'].split('|');
            options_html = '';
            for (let j in options) {
                let required = (j == '0') ? form_stru[i]['valid'] : '';
                options_html += `
                    <div class="form-check form-check-inline">
                        <input type="${form_stru[i]['type']}" name="${form_stru[i]['name']}" value="${options[j]}" class="form-check-input" id="${form_stru[i]['name']}_${j}" ${required}>
                        <label class="form-check-label" for="${form_stru[i]['name']}_${j}">${options[j]}</label>
                    </div>`;
            };

            form_item_html += `
                <div class="col-sm-${form_stru[i]['width']} mb-3">
                    <label class="form-label w-100">${form_stru[i]['label']}</label>
                    ${options_html}
                </div>`;

        } else if (form_stru[i]['type'] === 'select') {
            options = form_stru[i]['option'].split('|');
            options_html = '';
            for (let j in options) {
                options_html += `
                    <option value="${options[j]}">${options[j]}</option>`;
            }

            form_item_html += `
                <div class="col-sm-${form_stru[i]['width']} mb-3">
                    <label class="form-label">${form_stru[i]['label']}</label>
                    <select name="${form_stru[i]['name']}" class="form-select" id="${form_stru[i]['name']}" ${form_stru[i]['valid']}>
                        ${options_html}
                    </select>
                </div>`;

        } else if (form_stru[i]['type'] === 'select_m') {
            options = form_stru[i]['option'].split('|');
            options_html = '';
            for (let j in options) {
                options_html += `
                    <option value="${options[j]}">${options[j]}</option>`;
            }

            form_item_html += `
                <div class="col-sm-${form_stru[i]['width']} mb-3">
                  <label class="form-label">${form_stru[i]['label']}</label>
                  <select name="${form_stru[i]['name']}" class="form-select" id="${form_stru[i]['name']}" ${form_stru[i]['valid']} multiple >
                    ${options_html}
                  </select>
                </div>`;

        } else if (form_stru[i]['type'] === 'textarea') {
            form_item_html += `
                <div class="col-sm-${form_stru[i]['width']} mb-3">
                  <label class="form-label">${form_stru[i]['label']}</label>
                  <textarea name="${form_stru[i]['name']}" class="form-control" id="${form_stru[i]['name']}" rows="5" ${form_stru[i]['valid']}>${form_stru[i]['value']}</textarea>
                </div>`;

        } else if (form_stru[i]['type'] === 'checkbox') {
            options = form_stru[i]['option'].split('|');
            options_html = '';
            let required = form_stru[i]['valid'] ? `oninput="renderCheckbox('${form_stru[i]['name']}')"` : '';

            for (let j in options) {
                options_html += `
                  <div class="form-check form-check-inline">
                    <input type="${form_stru[i]['type']}" name="${form_stru[i]['name']}" value="${options[j]}" class="form-check-input ${form_stru[i]['name']}" id="${form_stru[i]['name']}_${j}" ${form_stru[i]['valid']} ${required}>
                    <label class="form-check-label" for="${form_stru[i]['name']}_${j}">${options[j]}</label>
                  </div>`;
            };

            form_item_html += `
                <div class="col-sm-${form_stru[i]['width']} mb-3">
                  <label class="form-label w-100">${form_stru[i]['label']}</label>
                  ${options_html}
                </div>`;

        } else if (form_stru[i]['type'] === 'hidden') {
            form_item_html += `
                <input type="hidden" name="${form_stru[i]['name']}" value="${form_stru[i]['value']}" id="${form_stru[i]['name']}">`;
        }
    }
    form_item.innerHTML = form_item_html;

    // let date_input = document.getElementById('date')
    // let today_date = new Date()
    // date_input.value = today_date.getFullYear() + '-' + ('0' + (today_date.getMonth() + 1)).slice(-2) + '-' + ('0' + today_date.getDate()).slice(-2);

    // let min_date = new Date()
    // min_date.setDate(min_date.getDate() - 5)
    // let max_date = new Date()
    // max_date.setDate(max_date.getDate() + 5)
    // date_input.setAttribute('min', min_date.getFullYear() + '-' + ('0' + (min_date.getMonth() + 1)).slice(-2) + '-' + ('0' + min_date.getDate()).slice(-2))
    // date_input.setAttribute('max', max_date.getFullYear() + '-' + ('0' + (max_date.getMonth() + 1)).slice(-2) + '-' + ('0' + max_date.getDate()).slice(-2))
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
//     let checkboxes = Array.from(document.getElementsByName(name));
//     let checkboxes_swith = checkboxes.some(function(item) {
//         return item.checked;
//     });
// }