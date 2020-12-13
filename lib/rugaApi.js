const axios = require('axios')
const { resolve, reject } = require('promise')
const link = 'https://arugaz.herokuapp.com'
const links = 'https://api.i-tech.id'
const fileyt = 'https://media.discordapp.net/attachments/702481939029950484/780380316942467102/IMG_20201123_173235_689.jpg?width=430&height=430'
const eroryt = 'https://media.discordapp.net/attachments/702481939029950484/780380316942467102/IMG_20201123_173235_689.jpg?width=430&height=430'
const news = 'https://www.news.developeridn.com/'
const keys = 'wK88iz-0mxTwf-var2Zn-GYcAdZ-4sgjJz'
const linkg = 'https://nekos.life/api/v2'

const insta = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/ig?url=${url}`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const ytmp3 = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/yta?url=${url}`)
    .then((res) => {
		if (res.data.error) resolve({status: 'error', link: eroryt, judul: res.data.error})
		if (Number(res.data.filesize.split(' MB')[0]) >= 10.00) resolve({status: 'filesize', link: fileyt, judul: '[❗] Terjadi kesalahan mungkin file audionya terlalu besar'})
        resolve({status: 'success', link: res.data.result, size: res.data.filesize, thumb: res.data.thumb, judul: res.data.title})
    })
    .catch((err) =>{
        reject(err)
    })
})

const ytmp4 = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/ytv?url=${url}`)
    .then((res) => {
		if (res.data.error) resolve({status: 'error', link: eroryt, judul: res.data.error})
		if (Number(res.data.filesize.split(' MB')[0]) >= 10.00) resolve({status: 'filesize', link: fileyt, judul: '[❗] Terjadi kesalahan mungkin file audionya terlalu besar'})
        resolve({status: 'success', link: res.data.result, size: res.data.filesize, thumb: res.data.thumb, judul: res.data.title})
    })
    .catch((err) =>{
        reject(err)
    })
})

const stalkig = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/stalk?username=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `User: ${res.data.Username}\nName: ${res.data.Name}\nBio: ${res.data.Biodata}\nFollower: ${res.data.Jumlah_Followers}\nFollowing: ${res.data.Jumlah_Following}\nPost: ${res.data.Jumlah_Post}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})
			
const stalkigpict = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/stalk?username=${url}`)
    .then((res) => {
		if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.data.Profile_pic}`)
    })
    .catch((err) =>{
        reject(err)
    })
})

const quote = async () => new Promise((resolve, reject) => {
    axios.get(`${link}/api/randomquotes`)
    .then((res) => {
        const text = `Author: ${res.data.author}\n\nQuote: ${res.data.quotes}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const berita = async (url) => new Promise((resolve, reject) => {
    axios.get(`${news}/search?q=${url}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const simi = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://arugaz.herokuapp.com/api/simisimi?kata=${url}&apikey=GvJwTdR2ZKfbO3OSpcDlALv8l~eK.LTBY_H5khWL`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})


const wiki = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/wiki?q=${url}`)
    .then((res) => {
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const nime = async () => new Promise((resolve, reject) => {
    axios.get(`https://nekos.life//api/v2/img/wallpaper`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const hentai = async () => new Promise((resolve, reject) => {
    axios.get(`https://nekos.life/api/v2/img/hentai`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const feet = async () => new Promise((resolve, reject) => {
    axios.get(`${linkg}/img/feet`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const kemo = async () => new Promise((resolve, reject) => {
    axios.get(`${linkg}/img/kemonomimi`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const pussy = async () => new Promise((resolve, reject) => {
    axios.get(`${linkg}/img/pussy`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const loli = async () => new Promise((resolve, reject) => {
    axios.get(`https://api.lolis.life/kawaii`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const futanari = async () => new Promise((resolve, reject) => {
    axios.get(`${linkg}/img/futanari`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const boobs = async () => new Promise((resolve, reject) => {
    axios.get(`${linkg}/img/boobs`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})


const hug = async () => new Promise((resolve, reject) => {
    axios.get(`https://api.lolis.life/pat`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const yuri = async () => new Promise((resolve, reject) => {
    axios.get(`https://nekos.life//api/v2/img/yuri`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const blowjob = async () => new Promise((resolve, reject) => {
    axios.get(`https://nekos.life/api/v2/img/blowjob`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const wide = async (imageLink) => new Promise((resolve, reject) => {
    axios.get(`https://vacefron.nl/api/wide?image=${imageLink}`)
    .then((res) => {
		 resolve(res.data)
    })
    .catch((err) =>{
        reject(err)
    })
})

const trap = async () => new Promise((resolve, reject) => {
    axios.get(`https://nekos.life/api/v2/img/trap`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const roti = async () => new Promise((resolve, reject) => {
    axios.get(`https://api.computerfreaker.cf/v1/baguette`)
    .then((res) => {
        resolve(res.data.url)
    })
    .catch((err) =>{
        reject(err)
    })
})

const hneko = async () => new Promise((resolve, reject) => {
    axios.get(`https://nekos.life/api/lewd/neko`)
    .then((res) => {
        resolve(res.data.neko)
    })
    .catch((err) =>{
        reject(err)
    })
})

const fox = async () => new Promise((resolve, reject) => {
    axios.get(`https://nekos.life/api/fox_girl`)
    .then((res) => {
        resolve(res.data.neko)
    })
    .catch((err) =>{
        reject(err)
    })
})

const neko = async () => new Promise((resolve, reject) => {
    axios.get(`https://nekos.life/api/neko`)
    .then((res) => {
        resolve(res.data.neko)
    })
    .catch((err) =>{
        reject(err)
    })
})

/*const kuso = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/kuso?q=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `Judul ${res.data.tittle}\n\nInfo: ${res.data.info}\nlink download: ${res.data.link_dl}\nSinopsis: ${res.data.sinopsis}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})*/

const jadwaldaerah = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://api.haipbis.xyz/jadwalsholat?daerah=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `Jadwal Sholat ${url}\n\nImsyak: ${res.data.Imsyak}\nSubuh: ${res.data.Subuh}\nDzuhur: ${res.data.Dzuhur}\nAshar: ${res.data.Ashar}\nMaghrib: ${res.data.Maghrib}\nIsya: ${res.data.Isya}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const cuaca = async (url) => new Promise((resolve, reject) => {
    axios.get(`https://rest.farzain.com/api/cuaca.php?id=${url}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`)
    .then((res) => {
		if (res.data.respon.cuaca == null) resolve('Maaf daerah kamu tidak tersedia')
        const text = `Cuaca di: ${res.data.respon.tempat}\n\nCuaca: ${res.data.respon.cuaca}\nAngin: ${res.data.respon.angin}\nDesk: ${res.data.respon.deskripsi}\nKelembapan: ${res.data.respon.kelembapan}\nSuhu: ${res.data.respon.suhu}\nUdara: ${res.data.respon.udara}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const chord = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/chord?q=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        resolve(res.data.result)
    })
    .catch((err) =>{
        reject(err)
    })
})

const tulis = async (teks) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/nulis?text=${encodeURIComponent(teks)}`)
    .then((res) => {
        resolve(`${res.data.result}`)
    })
    .catch((err) => {
        reject(err)
    })
})

const artinama = async (nama) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/artinama?nama=${nama}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const cekjodoh = async (nama,pasangan) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/jodohku?nama=${nama}&pasangan=${pasangan}`)
	.then((res) => {
		const textc = `Nama : ${res.data.nama}\nPasangan : ${res.data.pasangan}\nPositif: ${res.data.positif}\nNegatif : ${res.data.negatif}`
		resolve({link: res.data.gambar, text: textc})
	})
	.catch((err) => {
		reject(err)
	})
})

const movie = async () => new Promise((resolve, reject) => {
	axios.get(`https://api.haipbis.xyz/mostviewedmovieid`)
	.then((res) => {
		const texts = `*Top Film Indonesia Saat ini!*\n\n\n✨️Posisi 1: *Judul:* ${res.data[0].title}\n *Penonton:* ${res.data[0].viewers}\n *Link:* ${res.data[0].link}\n\n✨️Posisi 2: *Judul:* ${res.data[1].title}\n *Penonton:* ${res.data[1].viewers}\n *Link:* ${res.data[1].link}`
		resolve(texts)
	})
	.catch((err) => {
		reject(err)
	})
})

const covidindo = async () => new Promise((resolve, reject) => {
	axios.get(`${link}/api/coronaindo`)
	.then((res) => {
		const textv = `Info Covid-19 ${res.data.negara}\n\nKasus Baru: ${res.data.kasus_baru}\nTotal Kasus: ${res.data.kasus_total}\nSembuh: ${res.data.sembuh}\nPenanganan: ${res.data.penanganan}\nMeninggoy: ${res.data.meninggal}\n\nUpdate: ${res.data.terakhir}`
		resolve(textv)
	})
	.catch((err) => {
		reject(err)
	})
})

const resep = async (menu) => new Promise((resolve, reject) => {
    axios.get('https://masak-apa.tomorisakura.vercel.app/api/search/?q=' + menu)
    .then(async (res) => {
        const { results } = await res.data
        const random = Math.floor(Math.random() * 16)
        axios.get('https://masak-apa.tomorisakura.vercel.app/api/recipe/' + results[random].key)
        .then(async (result) => {
            const { results } = await result.data
            const bahannya = await `${results.ingredient}`
            const bahan = bahannya.replace(/,/g,'\n')
            const tutornya = await `${results.step}`
			const thumb = await `${results.thumb}`
            const tutornih = tutornya.replace(/,/g,'\n')
            const tutor = tutornih.replace(/.,/g,'\n')
            const hasil = `*Judul:* ${results.title}\n*Penulis:* ${results.author.user}\n*Rilis:* ${results.author.datePublished}\n*Level:* ${results.dificulty}\n*Waktu:* ${results.times}\n*Porsi:* ${results.servings}\n\n*Bahan-bahan:*\n${bahan}\n\n*Step-by-step:*\n${tutor}`
		  resolve(hasil)
        })
    })
    .catch((err) => {
        console.log(err)
        reject(err)
    })
})

const gmbar = async (kalimat) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/ttp?kata=${kalimat}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const searchs = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/youtube?url=${url}`)
    .then((res) => {
		if (res.data.error) resolve(res.data.error)
        const text = `Judul: ${res.title}\nDownload Mp3: ${res.mp3}\nDownload Mp4: ${res.mp4}`
        resolve(text)
    })
    .catch((err) =>{
        reject(err)
    })
})

const pictsearch = async (url) => new Promise((resolve, reject) => {
    axios.get(`${link}/api/youtube?url=${url}`)
    .then((res) => {
		if (res.data.error) resolve('https://c4.wallpaperflare.com/wallpaper/976/117/318/anime-girls-404-not-found-glowing-eyes-girls-frontline-wallpaper-preview.jpg')
        resolve(`${res.image}`)
    })
    .catch((err) =>{
        reject(err)
    })
})


const hilih = async (kalimat) => new Promise((resolve, reject) => {
	axios.get(`${links}/tools/hilih?key=${keys}&kata=${kalimat}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const bapakfont = async (kalimat) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/bapakfont?kata=${kalimat}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const fakta = async () => new Promise((resolve, reject) => {
	axios.get(`${links}/tools/fakta?key=${keys}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})


const pantun = async () => new Promise((resolve, reject) => {
	axios.get(`${links}/tools/pantun?key=${keys}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

const lirik = async (judul) => new Promise((resolve, reject) => {
	axios.get(`${link}/api/lirik?judul=${judul}`)
	.then((res) => {
		resolve(res.data.result)
	})
	.catch((err) => {
		reject(err)
	})
})

module.exports = {
    insta,
    ytmp3,
    ytmp4,
    stalkig,
    stalkigpict,
    quote,
	//kuso,
	nime,
	fox,
	hilih,
	searchs,
	pictsearch,
	pantun,
	fakta,
	blowjob,
	pussy,
	wide,
	futanari,
	resep,
	trap,
	roti,
	loli,
	kemo,
	feet,
	movie,
	boobs,
	yuri,
	hug,
	hneko,
	gmbar,
	hentai,
	neko,
	simi,
	berita,
    wiki,
    jadwaldaerah,
    cuaca,
    chord,
    tulis,
	artinama,
	cekjodoh,
	covidindo,
	bapakfont,
	lirik
}
