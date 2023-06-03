// This is a java script code used to switch in to multi language (Amharic to English )

// declaring a variable that can select by qurery selector by thier class name 
let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description"),
     nav = document.querySelector(".Navigation"),
     nav1 = document.querySelector(".Navigation1"),
     nav2 = document.querySelector(".Navigation2"),
     nav3 = document.querySelector(".Navigation3"),
     nav4 = document.querySelector(".Navigation4"),
     lalibelaTit = document.querySelector(".lalibelaTitle1"),
     lalibelaDes = document.querySelector(".lalibelaDescription1"),
     AXUMTit = document.querySelector(".AXUMTitle1"),
     AXUMDes = document.querySelector(".AXUMDescription1"),
     SOFUMERTit = document.querySelector(".SOFUMERTitle1"),
     SOFUMERDes = document.querySelector(".SOFUMERDescription1"),
     AfarTit = document.querySelector(".AfarTitle1"),
     AfarDes = document.querySelector(".AfarDescription1"),
     FasilTit = document.querySelector(".FasilTitle1"),
     FasilDes = document.querySelector(".FasilDescription1"),
     ErtaAleTit = document.querySelector(".ErtaAleTitle1"),
     ErtaAleDes = document.querySelector(".ErtaAleDescription1"),
     SimienNpTit = document.querySelector(".SimienNpTitle1"),
     SimienNpDes = document.querySelector(".SimienNpDescription1"),
     BlNfTit = document.querySelector(".BlueNfTitle1"),
     BlNfDes = document.querySelector(".BlueNfDescription1"),
     mapEth = document.querySelector(".ETHMapTitle1"),
     weAre = document.querySelector(".WeAreTitle1"),
     Htit = document.querySelector(".HistographyTitle"),
     Hdes = document.querySelector(".Histographydescription");


 //A function used to link the new data with 
//  the existing page data and switch them when the
//   button on the navigation bar in the "langs" class
//    name active is clicked  

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
          nav.textContent = data[attr].Navigation
          nav1.textContent = data[attr].Navigation1
          nav2.textContent = data[attr].Navigation2
          nav3.textContent = data[attr].Navigation3
          nav4.textContent = data[attr].Navigation4
          lalibelaTit.textContent = data[attr].lalibelaTitle1
          lalibelaDes.textContent = data[attr].lalibelaDescription1
          AXUMTit.textContent = data[attr].AXUMTitle1
          AXUMDes.textContent = data[attr].AXUMDescription1
          SOFUMERTit.textContent = data[attr].SOFUMERTitle1
          SOFUMERDes.textContent = data[attr].SOFUMERDescription1
          AfarTit.textContent = data[attr].AfarTitle1
          AfarDes.textContent = data[attr].AfarDescription1
          FasilTit.textContent = data[attr].FasilTitle1
          FasilDes.textContent = data[attr].FasilDescription1
          ErtaAleTit.textContent = data[attr].ErtaAleTitle1
          ErtaAleDes.textContent = data[attr].ErtaAleDescription1
          SimienNpTit.textContent = data[attr].SimienNpTitle1
          SimienNpDes.textContent = data[attr].SimienNpDescription1
          BlNfTit.textContent = data[attr].BlueNfTitle1
          BlNfDes.textContent = data[attr].BlueNfDescription1
          mapEth.textContent = data[attr].ETHMapTitle1
          weAre.textContent = data[attr].WeAreTitle1
          Htit.textContent = data[attr].HistographyTitle
          Hdes.textContent = data[attr].Histographydescription

     })
})

// The data that is switched between multiple languages

let data = {
     // amharic: {
     //      ti: "የኢትዮጵያ ታሪክ",
     //      de: "የኢትዮጵያ ታሪክ አጻጻፍ ጥንታዊ፣ የመካከለኛው ዘመን፣ ቀደምት ዘመናዊ እና ዘመናዊ የኢትዮጵያን ታሪክ መዝግቦ የሚያጠቃልለው የሀገር ውስጥና የውጭ ምንጮችን ጨምሮ ነው። የኢትዮጵያ ታሪካዊ አጻጻፍ መነሻ ከጥንታዊው የአክሱም መንግሥት (100 – 940 ዓ.ም. ዓ.ም.) ነው። እነዚህ ቀደምት ጽሑፎች የተጻፉት በኢትዮጵያ ግእዝ ፊደል ወይም በግሪክ ፊደል ሲሆን የተለያዩ ሚዲያዎችን እንደ የእጅ ጽሑፎች እና በሐውልት ሐውልቶች ላይ የተቀረጹ ጽሑፎች እና የዘመኑን ክስተቶች የሚዘግቡ ሐውልቶች ይገኙበታል። የታሪክ አጻጻፍ በኢትዮጵያ ሥነ ጽሑፍ ውስጥ በጥንታዊው የሰለሞናዊ ሥርወ መንግሥት (1270-1974) የተረጋገጠ ዘውግ ሆነ። በዚህ ወቅት፣ የተፃፉ ታሪኮች በአብዛኛው በንጉሣዊው የሕይወት ታሪክ እና ሥርወ መንግሥት ዜና መዋዕል መልክ፣ በሃጂዮግራፊያዊ ሥነ ጽሑፍ እና በዓለማቀፋዊ ታሪኮች በታሪክ ታሪክ ተጨምረው ነበር። እንደ ኦርቶዶክስ ኬብራ ናጋስት ባሉ ስራዎች ምክንያት የክርስቲያኖች አፈ ታሪክ የመካከለኛው ዘመን የኢትዮጵያ ታሪክ አፃፃፍ ሊንችፒን ሆነ። ይህም የኢትዮጵያ የሰለሞናዊ ሥርወ መንግሥት ገዢዎች የዘር ሐረግ ትውፊት ያጠናከረ ሲሆን ይህም የእስራኤል ታዋቂው ንጉሥ የሰሎሞን ዘሮች መሆናቸውን ያስረግጣሉ። የኢትዮጵያ የታሪክ አጻጻፍ ሥነ-ጽሑፍ በተለምዶ በክርስቲያናዊ ሥነ-መለኮት እና በመጽሐፍ ቅዱስ የዘመን አቆጣጠር የበላይነት የተያዘ ነው። በአፍሪካ ቀንድ እና ከዚያም በላይ ከሙስሊም፣ አረማዊ እና የውጭ አካላት ከፍተኛ ተጽዕኖ ነበረው። ከሕዝበ ክርስትና ጋር ዲፕሎማሲያዊ ግንኙነት የተመሰረተው በሮማውያን ዘመን በኢትዮጵያ የመጀመሪያው ክርስትያን ንጉስ ኢዛና የአክሱም ንጉስ በ4ኛው መቶ ክፍለ ዘመን ሲሆን በመካከለኛው ዘመን መጨረሻ ወደ መካከለኛው ዘመን አውሮፓ በሚጓዙ ኤምባሲዎች አዲስ ነበር ። የመካከለኛው ዘመን አውሮፓውያን ታሪክ ጸሐፊዎች ስለ ኢትዮጵያ የጥንት የግሪክና የሮማውያን የታሪክ ድርሳናት ውርስ በመመሥረት ኢትዮጵያን፣ሕዝቦቿን እና ሃይማኖታዊ እምነቶችን ከእስልምና ኃይሎች ጋር ሊቃወሙ እንደሚችሉ ከሚታዩት ተረት ከሆነው ፕሪስተር ዮሐንስ ጋር በማያያዝ ሞክረዋል። የኢትዮጵያ ታሪክ እና ህዝቦቿም በመካከለኛው ዘመን እስላማዊ ታሪክ አጻጻፍ እና በቻይና ኢንሳይክሎፔዲያዎች፣ የጉዞ ሥነ-ጽሑፍ እና ኦፊሴላዊ ታሪኮች ላይም ተጠቅሰዋል። በ16ኛው መቶ ክፍለ ዘመን እና በዘመናዊው ዘመን መጀመሪያ ላይ ከፖርቱጋል ኢምፓየር ጋር ወታደራዊ ጥምረት ተፈጠረ፣የኢየሱሳውያን ካቶሊካዊ ሚሲዮናውያን መጡ እና ከአዳል ሱልጣኔት እና የኦቶማን ኢምፓየር ጨምሮ እስላማዊ ጠላቶች እንዲሁም ከአማልክቱ ኦሮሞዎች ጋር ረዘም ያለ ጦርነት ተደረገ። የኢትዮጵያን ኢምፓየር ደህንነት አደጋ ላይ ጥሏል። ሕዝበ ክርስትና በሮማውያን ዘመን የተመሰረተችው በኢትዮጵያ የመጀመሪያው የክርስትና ንጉሥ ኢዛና የአክሱም ንጉሥ በ4ኛው መቶ ክፍለ ዘመን ሲሆን በመካከለኛው ዘመን መጨረሻ ወደ መካከለኛው ዘመን አውሮፓ በሚሄዱ ኤምባሲዎች ታድሳለች። የመካከለኛው ዘመን አውሮፓውያን ታሪክ ጸሐፊዎች ስለ ኢትዮጵያ የጥንት የግሪክና የሮማውያን የታሪክ ድርሳናት ውርስ በመመሥረት ኢትዮጵያን፣ሕዝቦቿን እና ሃይማኖታዊ እምነቶችን ከእስልምና ኃይሎች ጋር ሊቃወሙ እንደሚችሉ ከሚታዩት ተረት ከሆነው ፕሪስተር ዮሐንስ ጋር በማያያዝ ሞክረዋል። የኢትዮጵያ ታሪክ እና ህዝቦቿም በመካከለኛው ዘመን እስላማዊ ታሪክ አጻጻፍ እና በቻይና ኢንሳይክሎፔዲያዎች፣ የጉዞ ሥነ-ጽሑፍ እና ኦፊሴላዊ ታሪኮች ላይም ተጠቅሰዋል። "
     //      },
     // english: {
     //      ti: "Hello World",
     //      de: "Ethiopian historiography includes the ancient, medieval, early modern, and modern disciplines of recording the history of Ethiopia, including both native and foreign sources. The roots of Ethiopian historical writing can be traced back to the ancient Kingdom of Aksum (c. AD 100 – c. 940). These early texts were written in either the Ethiopian Ge'ez script or the Greek alphabet, and included a variety of mediums such as manuscripts and epigraphic inscriptions on monumental stelae and obelisks documenting contemporary events. The writing of history became an established genre in Ethiopian literature during the early Solomonic dynasty (1270–1974). In this period, written histories were usually in the form of royal biographies and dynastic chronicles, supplemented by hagiographic literature and universal histories in the form of annals. Christian mythology became a linchpin of medieval Ethiopian historiography due to works such as the Orthodox Kebra Nagast. This reinforced the genealogical traditions of Ethiopia's Solomonic dynasty rulers, which asserted that they were descendants of Solomon, the legendary King of Israel.  Ethiopian historiographic literature has been traditionally dominated by Christian theology and the chronology of the Bible. There was also considerable influence from Muslim, pagan and foreign elements from within the Horn of Africa and beyond. Diplomatic ties with Christendom were established in the Roman era under Ethiopia's first Christian king, Ezana of Axum, in the 4th century AD, and were renewed in the Late Middle Ages with embassies traveling to and from medieval Europe. Building on the legacy of ancient Greek and Roman historical writings about Ethiopia, medieval European chroniclers made attempts to describe Ethiopia, its people, and religious faith in connection to the mythical Prester John, who was viewed as a potential ally against Islamic powers. Ethiopian history and its peoples were also mentioned in works of medieval Islamic historiography and even Chinese encyclopedias, travel literature, and official histories."
     // },
     amharic: {
          title: "ባህላችን",
          description: "የሀበሻ ባህልና ማንነት ኢትዮጵያውያን እና ኤርትራውያን ሁለቱም በአጠቃላይ ‘ሀበሻ’ ይባላሉ። ይህ ቃል የኢትዮጵያ/ኤርትራ ክልልን ልዩ ባህልና ህዝቦች ለመግለፅ ይጠቅማል። በታሪክ “ሀበሻ” በኤርትራ እና በሰሜን ኢትዮጵያ (እንደ አማራ፣ ትግራይ እና ትግርኛ ያሉ) የሴማዊ ነገዶች እና ብሄረሰቦችን ብቻ ያመለክታል። ዛሬ ግን ሀበሻ በተለምዶ ሁሉም የክልሉን ህዝቦች ዘር እና ጎሳ ሳይለይ እንደ አንድ ቃል ሆኖ ያገለግላል። የሀበሻ ማንነት እና ባህል የብዙ ኢትዮጵያውያን ባህላቸው ከሌላው አፍሪካ የሚለይበትን መንገድ የሚያካትት በመሆኑ እጅግ ጠቃሚ የኩራት ምንጭ ነው። ቃሉ በኦሞቲክ እና በሌሎች ቋንቋዎች እና በሌሎች አገሮች ውስጥ ባሉ አንዳንድ ጎሳዎችም ጥቅም ላይ ይውላል። መቼም በቅኝ ግዛት ያልተገዛ የኢትዮጵያ ክልል በብዙ መልኩ ከሌሎች የአፍሪካ ሀገራት ይለያል። የኢትዮጵያ ልማዶች ለዘመናት በተከናወኑ ተግባራት ስር እየሰደዱ የቀጠለ ሲሆን ብዙ የዕለት ተዕለት አኗኗር ዘይቤዎች ይከተላሉ። ለምሳሌ ቡናን ለማቅረብ፣ ቀሚስ አጣጥፎ፣ ዶሮ ቆርጦ ሰዎችን ሰላምታ ለማቅረብ ትክክለኛ እና ባህላዊ መንገድ አለ። ሀገሪቱ የራሷ ጥንታዊ ፊደላት እና የቀን መቁጠሪያ አላት አሁንም በአገልግሎት ላይ ናቸው። ከዚህም በላይ ሀገሪቱ ከቀደምት የክርስቲያን ማኅበራት አንዷ የሆነችው የኢትዮጵያ ኦርቶዶክስ ‘ተዋህዶ’ ቤተክርስቲያን ናት፤ አሁንም በሕዝብ ዘንድ ተቀባይነትን ያገኘች ናት። ዞሮ ዞሮ፣ የኢትዮጵያ ባህል ብዙ ጊዜ በጥሩ ሁኔታ መመደብ አይችልም። ከአንዳንድ የአረብ ወይም የሜዲትራኒያን ባህሎች ጋር ተመሳሳይነት አለው፣ ምንም እንኳን እነዚህ ገላጭዎች እንዲሁ አይመጥኑም። ይልቁንም “ሀበሻ” ለክልሉ ልዩ የሆነውን ባህልን ያሳያል። ሀገራዊ ወይም ‘ሀበሻ’ ባህልን የሚወክሉ አንዳንድ ባህላዊ ወጎች ቢኖሩም በክልሎች፣ በሃይማኖቶች እና በብሔረሰቦች መካከል አሠራሮች ይለያያሉ። ኢትዮጵያ ከ80 በላይ የተለያዩ ብሄር ብሄረሰቦችን ያቀፈች ነች። ቅድመ አያቶቻቸው ይለያያሉ፣ አንዳንዶቹ ወደ ባንቱ ወይም ከሰሃራ በታች ካሉ የኒሎቲክ ጎሳዎች የተመለሱ ሲሆን ሌሎች ደግሞ ከመካከለኛው ምስራቅ ከኩሽቲክ ጎሳዎች ጋር ቅርበት አላቸው።  በአጠቃላይ በኢትዮጵያ ውስጥ 87 የአፍ መፍቻ ቋንቋዎች ይነገራሉ.2 አማርኛ በመላ አገሪቱ ኦፊሴላዊ ደረጃ ያለው ብቸኛው ቋንቋ ነው። ይህ በእንዲህ እንዳለ፣ ሶማሌ፣ ኦሮሚፎ፣ አፋርኛ እና ትግርኛ አብላጫውን ብሄረሰብ በሚመለከት በክልል መንግስታት ይፋዊ አቋም አላቸው። እንግሊዘኛም በሰፊው የሚታወቅ የውጭ ቋንቋ ነው። አብዛኞቹ የከተማ ኢትዮጵያውያን አማርኛ፣ የአካባቢ/የብሄረሰብ ቋንቋ እና እንግሊዝኛ ይናገራሉ።",
          Navigation: "ዋና",
          Navigation1: "እዚያ ምን ማድረግ ይቻላል",
          Navigation2: "እዚያ ምን ሊታይ ይችላል ",
          Navigation3: "ስለ እኛ",
          Navigation4: "አግኙን",
          ETHMapTitle1: "የኢትዮጵያ ካርታ",
          lalibelaTitle1:"ላሊበላ",
          lalibelaDescription1: "ላሊበላ በኢትዮጵያ የአማራ ክልል ከተማ ነው። በላስታ አውራጃ እና በሰሜን ወሎ ዞን የሚገኘው ይህ ስፍራ ዝነኛ ውቅር አብያተ ክርስቲያናት የቱሪስት ቦታ ነው። መላው የላሊበላ የኢትዮጵያ ጥንታዊነት፣ የመካከለኛው ዘመን እና የድህረ-መካከለኛው ዘመን ስልጣኔ ትልቅ እና ጠቃሚ ቦታ ነው።[1] ለክርስቲያኖች ላሊበላ ከኢትዮጵያ ቅድስተ ቅዱሳን ከተሞች አንዷ እና የጉዞ ማእከል ነች።",
          AXUMTitle1:"አክሱም",
          AXUMDescription1: "አክሱም ወይም አክሱም በትግራይ ክልል ውስጥ የምትገኝ ከተማ ነች (እ.ኤ.አ. ከ2015 ጀምሮ) ነዋሪዎቿ 66,900 የሚኖርባት። የአክሱሚት ኢምፓየር ታሪካዊ ዋና ከተማ የሆነችበት ቦታ ሲሆን የባህር ኃይል እና የንግድ ሃይል ከምዕራብ እስያ በተጨማሪ አንዳንድ ክፍሎች እንደ ሳዑዲ አረቢያ, የመን እና ደቡብ ግብፅ እና ሱዳን ይገዛ ነበር. ክልሉን ከ400 ዓ.ዓ. እስከ 10ኛው ክፍለ ዘመን ድረስ አስተዳድሯል።",
          SOFUMERTitle1:"የሶፍ ኦማር ዋሻዎች",
          SOFUMERDescription1: "የሶፍ ኦማር ዋሻ በ15.1 ኪሎ ሜትር (9.4 ማይል) ርዝመት ያለው በኢትዮጵያ ረጅሙ ዋሻ ነው። እ.ኤ.አ. በ1972 ጥናት ሲደረግ ከአፍሪካ ረጅሙ ዋሻ ነበር። ከዚያን ጊዜ ጀምሮ በማዳጋስካር (ማሮካቤ - 113 ኪ.ሜ.) እና በአልጄሪያ (ራሃር ቡ ማዛ - የታፍና ወንዝ ዋሻ 18.4 ኪሜ) የተደረጉ አሰሳዎች አልፈውታል።",
          AfarTitle1:"ዳሎል (የሙት ከተማ)",
          AfarDescription1: "ዳሎል (አማርኛ፡ ዳሎል) በሰሜን ኢትዮጵያ በዳሎል ወረዳ የሚገኝ አጥቢያ ነው። በአፋር ክልል ቂልቤት ራሱ በአፋር ክልል ውስጥ የሚገኝ ኬክሮስ እና ኬንትሮስ 14°14′19″N 40°17′38″E ከባህር ጠለል በታች 130 ሜትር (430 ጫማ) አካባቢ ከፍታ አለው።",
          FasilTitle1:"ፋሲል ግቢ",
          FasilDescription1: "ፋሲል ገበያ በአማራ ክልል ጎንደር የሚገኝ ምሽግ ነው። በ17ኛው ክፍለ ዘመን በአፄ ፋሲለደስ የተመሰረተች እና የኢትዮጵያ ነገስታት ቤት ነበረች። የእሱ ልዩ አርክቴክቸር የኑቢያን፣ የህንድ፣ የአረብ እና የባሮክ ባህሪያትን ጨምሮ የተለያዩ ተጽእኖዎችን ያሳያል።[1] ከታሪካዊ ጠቀሜታውና ከሥነ ሕንፃው አንጻር ምሽጉ በ1979 በዩኔስኮ የዓለም ቅርስነት ተመዝግቧል።[1] ጌቢ የአማርኛ ቃል ግቢ ወይም ማቀፊያ ነው።[2]",
          ErtaAleTitle1:"ኤርታሌ",
          ErtaAleDescription1: "ኤርታ አሌ (ወይ ኤርታሌ ወይም ኢርታሌ፤ አማርኛ፡ ኤርታሌ) በሰሜን ምስራቅ ኢትዮጵያ በአፋር ክልል ውስጥ ያለማቋረጥ የሚንቀሳቀስ ባሳልቲክ ጋሻ እሳተ ገሞራ ነው። በአፋር ዲፕሬሽን፣ በረሃማ አካባቢ ይገኛል። ኤርታ አሌ በኢትዮጵያ ውስጥ በጣም ንቁ የሆነ እሳተ ገሞራ ነው።",
          SimienNpTitle1:"የሰሜን ተራሮች ብሔራዊ ፓርክ",
          SimienNpDescription1: "በኢትዮጵያ ውስጥ ትልቁ ብሔራዊ ፓርክ። በአማራ ክልል ሰሜን ጎንደር ዞን የሚገኘው ግዛቱ ከፍተኛውን የስሜን ተራሮች የሚሸፍን ሲሆን በኢትዮጵያ ከፍተኛው ቦታ የሆነውን ራስ ዳሽንን ያጠቃልላል።",
          BlueNfTitle1:"የጢስ አባይ ፏፏቴ",
          BlueNfDescription1: "‘ቲስ አባይ’ ማለት ‘ታላቅ ጭስ’፣ የጥቁር አባይ ፏፏቴ የኢትዮጵያ የተፈጥሮ ውበት ምስክር ነው። የብሉ ናይል ፏፏቴ በአባይ ወንዝ ስርአት ውስጥ እጅግ አስደናቂ የሆነ ፏፏቴ ሲሆን ከሰኔ እስከ መስከረም መጀመሪያ ባለው የዝናብ ወቅት እጅግ አስደናቂ ነው።",
          WeAreTitle1: "እኛ ኢትዮጵያውያን ",
          HistographyTitle: "የኢትዮጵያ ታሪክ",
          Histographydescription: "የኢትዮጵያ ታሪክ አጻጻፍ ጥንታዊ፣ የመካከለኛው ዘመን፣ ቀደምት ዘመናዊ እና ዘመናዊ የኢትዮጵያን ታሪክ መዝግቦ የሚያጠቃልለው የሀገር ውስጥና የውጭ ምንጮችን ጨምሮ ነው። የኢትዮጵያ ታሪካዊ አጻጻፍ መነሻ ከጥንታዊው የአክሱም መንግሥት (100 – 940 ዓ.ም. ዓ.ም.) ነው። እነዚህ ቀደምት ጽሑፎች የተጻፉት በኢትዮጵያ ግእዝ ፊደል ወይም በግሪክ ፊደል ሲሆን የተለያዩ ሚዲያዎችን እንደ የእጅ ጽሑፎች እና በሐውልት ሐውልቶች ላይ የተቀረጹ ጽሑፎች እና የዘመኑን ክስተቶች የሚዘግቡ ሐውልቶች ይገኙበታል። የታሪክ አጻጻፍ በኢትዮጵያ ሥነ ጽሑፍ ውስጥ በጥንታዊው የሰለሞናዊ ሥርወ መንግሥት (1270-1974) የተረጋገጠ ዘውግ ሆነ። በዚህ ወቅት፣ የተፃፉ ታሪኮች በአብዛኛው በንጉሣዊው የሕይወት ታሪክ እና ሥርወ መንግሥት ዜና መዋዕል መልክ፣ በሃጂዮግራፊያዊ ሥነ ጽሑፍ እና በዓለማቀፋዊ ታሪኮች በታሪክ ታሪክ ተጨምረው ነበር። እንደ ኦርቶዶክስ ኬብራ ናጋስት ባሉ ስራዎች ምክንያት የክርስቲያኖች አፈ ታሪክ የመካከለኛው ዘመን የኢትዮጵያ ታሪክ አፃፃፍ ሊንችፒን ሆነ። ይህም የኢትዮጵያ የሰለሞናዊ ሥርወ መንግሥት ገዢዎች የዘር ሐረግ ትውፊት ያጠናከረ ሲሆን ይህም የእስራኤል ታዋቂው ንጉሥ የሰሎሞን ዘሮች መሆናቸውን ያስረግጣሉ። የኢትዮጵያ የታሪክ አጻጻፍ ሥነ-ጽሑፍ በተለምዶ በክርስቲያናዊ ሥነ-መለኮት እና በመጽሐፍ ቅዱስ የዘመን አቆጣጠር የበላይነት የተያዘ ነው። በአፍሪካ ቀንድ እና ከዚያም በላይ ከሙስሊም፣ አረማዊ እና የውጭ አካላት ከፍተኛ ተጽዕኖ ነበረው። ከሕዝበ ክርስትና ጋር ዲፕሎማሲያዊ ግንኙነት የተመሰረተው በሮማውያን ዘመን በኢትዮጵያ የመጀመሪያው ክርስትያን ንጉስ ኢዛና የአክሱም ንጉስ በ4ኛው መቶ ክፍለ ዘመን ሲሆን በመካከለኛው ዘመን መጨረሻ ወደ መካከለኛው ዘመን አውሮፓ በሚጓዙ ኤምባሲዎች አዲስ ነበር ። የመካከለኛው ዘመን አውሮፓውያን ታሪክ ጸሐፊዎች ስለ ኢትዮጵያ የጥንት የግሪክና የሮማውያን የታሪክ ድርሳናት ውርስ በመመሥረት ኢትዮጵያን፣ሕዝቦቿን እና ሃይማኖታዊ እምነቶችን ከእስልምና ኃይሎች ጋር ሊቃወሙ እንደሚችሉ ከሚታዩት ተረት ከሆነው ፕሪስተር ዮሐንስ ጋር በማያያዝ ሞክረዋል። የኢትዮጵያ ታሪክ እና ህዝቦቿም በመካከለኛው ዘመን እስላማዊ ታሪክ አጻጻፍ እና በቻይና ኢንሳይክሎፔዲያዎች፣ የጉዞ ሥነ-ጽሑፍ እና ኦፊሴላዊ ታሪኮች ላይም ተጠቅሰዋል።  "

     },
     english: {
          title: "Our Culture",
          description: "Habesha Culture and Identity  Ethiopians and Eritreans both generally identify as ‘habesha’. This term is used to describe the unique culture and people of the Ethiopian/Eritrean region, regardless of ethnicity. Historically, “habesha” exclusively referred to the Semitic tribes and ethnicities in Eritrea and northern Ethiopia (such as the Amhara, Tigray and Tigrinya people). Today, however, habesha is commonly used as a unifying word to describe all people in the region, regardless of ethnicity or tribe. The habesha identity and culture is a very important source of pride for many Ethiopians as it encapsulates the way their culture differs from the rest of Africa. The word is also used in Omotic and other languages, and by some ethnicities in other countries.  Having never been colonised, the Ethiopian region differs from other African countries in many ways.      The customs of Ethiopia continue to be deeply rooted in centuries of practice, and many aspects of daily life are ritualised. For example, there is a correct and traditional way to serve coffee, fold a dress, cut chicken and greet people. The country also has its own ancient alphabet and calendar that are still in use. Moreover, the country is home to one of the earliest Christian organisations,<br><br> the Ethiopian Orthodox ‘Tewahedo’ Church, which remains the most popular religion. Ultimately, Ethiopian culture is often unable to be neatly categorised. It shares similarities with some Arab or Mediterranean cultures, although these descriptors also do not fit. Rather, “Habesha” epitomizes the culture that is unique to the region. It is important to appreciate the legacy and depth of Ethiopian culture in order to understand how Ethiopians see themselves in the contemporary setting. People generally do not view events of recent history (such as the political regimes, wars with neighbouring countries or famines) as things that define the country or its people. Rather, most Ethiopians see the hardship and political turmoil of the past few decades as a recent devastating chapter in a much longer history of independence and achievement. ",
         
         
          Navigation: "Home",
          Navigation1: "WHAT TO DO",
          Navigation2: "WHAT TO SEE",
          Navigation3: "ABOUT",
          Navigation4: "CONTACT",
          lalibelaTitle1:" Lalibela",
          lalibelaDescription1: "  Lalibela is a town in the Amhara Region of Ethiopia. Located in the Lasta district and North Wollo Zone, it is a tourist site for its famous rock-cut monolithic churches. The whole of Lalibela is a large and important site for the antiquity, medieval, and post-medieval civilization of Ethiopia.[1] To Christians, Lalibela is one of Ethiopia's holiest cities, and a center of pilgrimage.",
          AXUMTitle1:"Axum",
          AXUMDescription1: "Axum, or Aksum  is a town in the Tigray Region of Ethiopia with a population of 66,900 residents (as of 2015).It is the site of the historic capital of the Aksumite Empire, a naval and trading power that ruled the whole region in addition parts of West Asia as Saudi Arabia, Yemen, and Southern Egypt and Sudan. It ruled the region from about 400 BCE into the 10th century. In 1980, UNESCO added Axum's archaeological sites to its list of World Heritage Sites due to their historic value. ",
          SOFUMERTitle1:"Sof Omar Caves",
          SOFUMERDescription1: " Sof Omar Caves is the longest cave in Ethiopia at 15.1 kilometres (9.4 mi) long. When surveyed in 1972, it was the longest cave in Africa. Since then explorations in Madagascar (Marosakabe - 113km) and Algeria (Rhar Bou Ma’za - the Tafna River Cave 18.4 km) have overtaken it.",
          AfarTitle1:"Dallol (ghost town)",
          AfarDescription1: "Dallol (Amharic: ዳሎል) is a locality in the Dallol woreda of northern Ethiopia. Located in Kilbet Rasu, Afar Region in the Afar Depression, it has a latitude and longitude of 14°14′19″N 40°17′38″E with an elevation of about 130 metres (430 ft) below sea level. The Central Statistical Agency has not published an estimate for the 2005 population of the village, which has been described as a ghost town.",
          FasilTitle1:"Fasil Ghebbi",
          FasilDescription1: " The Fasil Ghebbi is a fortress located in Gondar, Amhara Region, Ethiopia. It was founded in the 17th century by Emperor Fasilides and was the home of Ethiopian emperors. Its unique architecture shows diverse influences including Nubian, Indian, Arab, and Baroque characteristics.[1] Because of its historical importance and architecture, the fortress was inscribed as a UNESCO World Heritage Site in 1979.[1] Ghebbi is an Amharic word for a compound or enclosure.",
          ErtaAleTitle1:"Erta Ale",
          ErtaAleDescription1: " Erta Ale a continuously active basaltic shield volcano in the Afar Region of northeastern Ethiopia. It is situated in the Afar Depression, a barren desert area. Erta Ale is the most active volcano in Ethiopia.",
          SimienNpTitle1:"Simien National Park",
          SimienNpDescription1: "  the largest national park in Ethiopia. Located in the North Gondar Zone of the Amhara Region, its territory covers the highest parts of the Simien Mountains and includes Ras Dashan, the highest point in Ethiopia.",
          BlueNfTitle1:"The Blue Nile Falls",
          BlueNfDescription1: " 'Tis Abay' meaning 'Great Smoke', the Blue Nile Falls are a testimony to Ethiopia's natural beauty. The Blue Nile Falls are the most dramatic falls anywhere on the Nile river system, and are at their most impressive in the rainy season from June to early September.",
          ETHMapTitle1: "Map Of Ethiopia",
          WeAreTitle1: "We Ethiopians Are ",
          HistographyTitle: "Ethiopian Historiography",
          Histographydescription: "Ethiopian historiography includes the ancient, medieval, early modern, and modern disciplines of recording the history of Ethiopia, including both native and foreign sources. The roots of Ethiopian historical writing can be traced back to the ancient Kingdom of Aksum (c. AD 100 – c. 940). These early texts were written in either the Ethiopian Ge'ez script or the Greek alphabet, and included a variety of mediums such as manuscripts and epigraphic inscriptions on monumental stelae and obelisks documenting contemporary events. The writing of history became an established genre in Ethiopian literature during the early Solomonic dynasty (1270–1974). In this period, written histories were usually in the form of royal biographies and dynastic chronicles, supplemented by hagiographic literature and universal histories in the form of annals. Christian mythology became a linchpin of medieval Ethiopian historiography due to works such as the Orthodox Kebra Nagast. This reinforced the genealogical traditions of Ethiopia's Solomonic dynasty rulers, which asserted that they were descendants of Solomon, the legendary King of Israel.  Ethiopian historiographic literature has been traditionally dominated by Christian theology and the chronology of the Bible. There was also considerable influence from Muslim, pagan and foreign elements from within the Horn of Africa and beyond. Diplomatic ties with Christendom were established in the Roman era under Ethiopia's first Christian king, Ezana of Axum, in the 4th century AD, and were renewed in the Late Middle Ages with embassies traveling to and from medieval Europe. Building on the legacy of ancient Greek and Roman historical writings about Ethiopia, medieval European chroniclers made attempts to describe Ethiopia, its people, and religious faith in connection to the mythical Prester John, who was viewed as a potential ally against Islamic powers. Ethiopian history and its peoples were also mentioned in works of medieval Islamic historiography and even Chinese encyclopedias, travel literature, and official histories."
     }
}
