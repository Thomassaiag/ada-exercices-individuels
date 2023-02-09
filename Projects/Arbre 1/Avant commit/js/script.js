function askName(){
    var nom_utilisateur = prompt('Quel est votre nom ?')
    var salutation='👋 Bonjour ' +nom_utilisateur
    document.body.innerHTML += '<h2>'+salutation+'</h2>'
}
var date= new Date()
function askBirthYear(){
    var annee_naissance=prompt('Quelle est votre année de naissance')
    var annee_courante=date.getFullYear()
    var age_utilisateur=annee_courante-annee_naissance
    return age_utilisateur
}

function askBirthMonth(){
    var mois_naissance
    mois_naissance=prompt('Quel est votre mois de naissance')
    return mois_naissance
}

askName()
var annee_naissance_utilisateur = askBirthYear()
var mois_naissance_utilisateur = askBirthMonth()
var mois_courant = date.getMonth()
if(mois_courant<mois_naissance_utilisateur){
        var age_reel=annee_naissance_utilisateur-1
} else{
        age_reel=annee_naissance_utilisateur
    }

var votre_age_est= 'Vous avez ' + age_reel + ' ans et '+ mois_naissance_utilisateur + ' mois'
document.body.innerHTML += '<h3>'+votre_age_est+'</h3>'