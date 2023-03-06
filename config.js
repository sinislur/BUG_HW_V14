// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')
const tiktok = require("./base/lib/tiktok")
const facebook = require("./base/lib/facebook")
const instagram = require("./base/lib/instagram")
const twitter = require("./base/lib/twitter")

global.ntnsfww = []
global.wlcm = []
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/@AkmalMods' // ubah aia
global.ig = 'https://instagram.com/noname_3110?igshid=YmMyMTA2M2Y=' // ubah aja
global.email = 'h20studiobusiness@gmail.com' //serah
global.region = 'Indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'AkmalZy' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'H2 STUDIO' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'AkmalZy' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6281223720214'] // ubah aja pake nomor lu
global.creator = "6281223720214@s.whatsapp.net"
global.premium = ['6281223720214','6285223265567'] // ubah aja pake nomor lu
global.packname = 'AkmalZy' // ubah aja
global.ownerr = ['AkmalZy'] // ubaha aja
global.author = 'AkmalZy' //ubah aja
global.sessionName = 'session' //Gausah Juga
global.sp = '⭔' // Gausah Juga

// Terserah
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    owner: 'Maaf Kamu Bukan Pengguna Premium',
 }
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
//Terserah Kalau Paham 
global.thumb = fs.readFileSync("./base/image/hw.jpg")
global.log0 = fs.readFileSync("./base/image/haikal.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})