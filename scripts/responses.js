function getBotResponse(input) {
    if (input == "Zamek Królewski na Wawelu") {
        return "Zamek był na przestrzeni wieków wielokrotnie rozbudowywany i odnawiany. Liczne pożary, grabieże " +
            "i przemarsze obcych wojsk, połączone z niszczeniem rezydencji powodowały, iż obiekt wielokrotnie " +
            "odbudowywano w nowych stylach architektonicznych oraz remontowano jego szatę zewnętrzną, a także " +
            "przekształcano i zmieniano wygląd i wyposażenie wnętrz. (...)";

    } else if (input == "Sukiennice") {
        return "Sukiennice ulegały przez wieki wielu przemianom i ich obecny kształt w niczym nie przypomina " +
            "dawnych sukiennic. Już w roku 1257 książę Bolesław Wstydliwy przy lokacji Krakowa zobowiązał się postawić " +
            "kamienne kramy sukienne. Stanowiły one podwójny rząd kramów, tworzących jakby uliczkę pośrodku Rynku. " +
            "Sukiennice w tej postaci przetrwały do połowy XIV stulecia.(...)";

    } else if (input == "Kościół Mariacki") {
        return "Według Jana Długosza pierwszy murowany kościół w stylu romańskim został ufundowany przez biskupa " +
            "krakowskiego Iwona Odrowąża w latach 1221–1222 na miejscu pierwotnej drewnianej świątyni. Wkrótce " +
            "jednak budowlę zniszczono podczas najazdów tatarskich. W latach 1290–1300 wzniesiono, częściowo na " +
            "poprzednich fundamentach, wczesnogotycki kościół halowy, który konsekrowano około roku 1320–1321. " +
            "Prace jednak kontynuowane były jeszcze w trzeciej dekadzie czternastego stulecia.";

    } else if (input == "Kazimierz") {
        return "(jid. ‏קוזמאַרק‎ Kuzmark[2]) – część Krakowa wchodząca w skład Dzielnicy I Stare Miasto. " +
            "Od powstania w XIV wieku do przełomu XVIII i XIX wieku był samodzielnym miastem, położonym na południe " +
            "od Krakowa, oddzielonym od niego nieistniejącą już odnogą Wisły (był miastem królewskim Korony Królestwa " +
            "Polskiego[3]). Jego północno-wschodnią część zajmowała dzielnica żydowska. Przez wiele wieków Kazimierz " +
            "był miejscem współistnienia i przenikania się kultury żydowskiej i chrześcijańskiej. Obecnie stanowi " +
            "jedną z ważniejszych atrakcji turystycznych Krakowa, jest też jednym z ośrodków życia kulturalnego miasta.";

    } else if (input == "Barbakan") {
        return "element średniowiecznego budownictwa obronnego, ważny składnik fortyfikacji miejskich, zazwyczaj " +
            "w formie okrągłej, murowanej budowli wysuniętej przed linię murów obronnych i połączonej z bramą " +
            "miejską za pośrednictwem osłoniętego przejścia (podwójna brama). Barbakan składał się z osłoniętego " +
            "przejścia (tzw. szyi), która łączyła mur obronny z np.: basztą, wieżą, basteją, rondlem, tarasem, " +
            "bastionem lub rawelinem.";

    } else if (input == "Dzień dobry!") {
        return "Dzień dobry!";

    } else if (input == "Do widzenia!") {
        return "Do widzenia, zapraszam ponownie!";

    } else if (input == "Motyla noga!") {
        return alert('Proszę, nie używaj takich słów!!!!!!!!!!');

    } else if (input == "version") {
        return "Wersja oprogramowania: v1.2.3";

    } else if (input == "pogoda Kraków") {
        return "W Krakowie jest 22 stopnie";

    } else {
        return "Przepraszam, nie zrozumiałem! Spróbuj podać inny zabytek!";
    }

}