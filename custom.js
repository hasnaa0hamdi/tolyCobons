quotes = [{
    quote: "حظك هيكون أحلى المرة الجاية",
}, {
    quote: "مبروك! كسبت كوبون شحن مجاني",
}, {
    quote: "إيه رأيك في خصم 10%؟",
}, {
    quote: "مبروك! كسبت خصم 20% على منتجاتنا",
}, {
    quote: "انت الي قتلت موفاسا",
}, {
    quote: "ازيك؟ كسبت معانا كوبون بقيمة 50 جنيه",
}, {
    quote: "خصم 5% مش كتير بس قمر",
}, {
    quote: "يادي الخصومات الي هتخرب بيتنا! البيه كسب خصم 25% وأمرنا لله",
}, {
    quote: "عارف ليه الغطاسين بيتكلموا بلغة الإشارة؟؟ .. عشان الحيتان ليها ودان ههه",
}, {
    quote: "مفيش كوبون بس ادخل اعملنا لايق عشان احنا غلابة",
}, {
    quote: "مرة واحد كلم الخط الساخن اتلسع",
}, {
    quote: "مرة طماطماية عطست .. قالت كاتشـب"
}, ]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    
    
    quote.innerHTML = quotes[random].quote;

	document.getElementById("Qbtn").disabled=true;
	//document.getElementById("Qbtn").disabled=false;
})