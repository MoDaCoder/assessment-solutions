class Data {
    static allData = [] 
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.category = data.category.subcatname;
        this.category = data.category.catname 
        this.address = data.address1
        this.zip = data.zip
        this.city = data.city
        this.state = data.state
        this.region = data.region
        this.phone = data.phone
        this.weburl = data.weburl
        this.qualityScore = data.qualityScore
        this.recid = data.recid;
        Data.allData.push(this)
    }

    static renderDatas(){
        for(let data of this.allData){
            data.renderData()
        }
    }

    static fetchData() {
        fetch(listingsURL)
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
             const container = document.getElementById('container')
             let box = document.createElement('box')
             let div = document.createElement('div')
             let img = document.createElement('img')
             let h2 = document.createElement('h2')
             let p = document.createElement('p')
             let br = document.createElement('br')
             let li = document.createElement('li')
                div.setAttribute('id', this.recid)
                div.setAttribute('class', 'content')
                img.setAttribute('src', 'images/fallback.png')
                p.setAttribute('class', 'p')
                h2.setAttribute('class', 'h2')
                h2.innerText = this.title
                p.innerText = this.description
                br.innerHTML = [this.address, this.city, this.state, this.zip, this.region].join(' ')
                li.innerText = [this.phone].join('Phone: ')
                li.innerText = [this.weburl].join('Website Link: ')
                li.innerText = [this.qualityScore].join('Quality Score: ')
                p.append(br, li)
                div.append(img, h2, p)
                box.appendChild(div)
                container.append(box)
        }
    }