class Data {
    static allData = []
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.redeemstart = data.redeemstart;
        this.category = data.category.catname;
        this.recid = data.recid;
        Data.allData.push(this)
    }

    static renderDatas(){
        for(let data of this.allData){
            data.renderData()
        }
    }

    static fetchData() {
        fetch(apiURL)
        .then(res => res.json())
        .then(datas => {
            for (let data of datas.data) {
                let newData = new Data(data)
            }
            this.renderDatas()
        })
    }

         renderData(){
             console.log(this.description)
             const text = document.getElementById('text')
             const div = document.createElement('div')
             const img = document.createElement('img')
             const h2 = document.createElement('h2')
             const p = document.createElement('p')
                div.setAttribute('id', this.recid)
                img.setAttribute('src', 'images/fallback.png')
                p.setAttribute('class', 'p')
                h2.setAttribute('class', 'h2')
                h2.innerText = this.title
                p.innerText = this.description
                div.append(img, h2, p)
                text.appendChild(div)
                console.log(img, h2, div, p)
        }
    }