if(window.localStorage) {
    let list = utils.get('list');
    if(list.length) {
        let html = '<ul>';
        list.map((item, i)=>{
            html += `<li>
                <div>
                    <header>
                        <span>${item.title}</span>
                        <time>${item.time}</time>
                    </header>
                    <div>
                        ${item.content}
                    </div>
                </div>
            </li>`;
        });
        html += `</ul>`;

        utils.getByClass('container').innerHTML = html;
    }else{
        utils.getByClass('container').innerHTML = '<p class="nodata">暂时没有数据</p>';
    }
    console.log(list);
}else{
    alert('你的浏览器不支持localhostStorage');
}

