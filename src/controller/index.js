let homePage = (req,res)=>{
    try{
    res.status(200).send(   `<body style="background-image: linear-gradient(56deg, rgba(254, 254, 254, 0.05) 0%, rgba(254, 254, 254, 0.05) 69%,rgba(160, 160, 160, 0.05) 69%, rgba(160, 160, 160, 0.05) 100%),linear-gradient(194deg, rgba(102, 102, 102, 0.02) 0%, rgba(102, 102, 102, 0.02) 60%,rgba(67, 67, 67, 0.02) 60%, rgba(67, 67, 67, 0.02) 100%),linear-gradient(76deg, rgba(169, 169, 169, 0.06) 0%, rgba(169, 169, 169, 0.06) 89%,rgba(189, 189, 189, 0.06) 89%, rgba(189, 189, 189, 0.06) 100%),linear-gradient(326deg, rgba(213, 213, 213, 0.04) 0%, rgba(213, 213, 213, 0.04) 45%,rgba(66, 66, 66, 0.04) 45%, rgba(66, 66, 66, 0.04) 100%),linear-gradient(183deg, rgba(223, 223, 223, 0.01) 0%, rgba(223, 223, 223, 0.01) 82%,rgba(28, 28, 28, 0.01) 82%, rgba(28, 28, 28, 0.01) 100%),linear-gradient(3deg, rgba(20, 20, 20, 0.06) 0%, rgba(20, 20, 20, 0.06) 62%,rgba(136, 136, 136, 0.06) 62%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(200deg, rgba(206, 206, 206, 0.09) 0%, rgba(206, 206, 206, 0.09) 58%,rgba(6, 6, 6, 0.09) 58%, rgba(6, 6, 6, 0.09) 100%),linear-gradient(304deg, rgba(162, 162, 162, 0.07) 0%, rgba(162, 162, 162, 0.07) 27%,rgba(24, 24, 24, 0.07) 27%, rgba(24, 24, 24, 0.07) 100%),linear-gradient(186deg, rgba(166, 166, 166, 0.04) 0%, rgba(166, 166, 166, 0.04) 5%,rgba(210, 210, 210, 0.04) 5%, rgba(210, 210, 210, 0.04) 100%),linear-gradient(90deg, rgb(26, 118, 64),rgb(32, 207, 121),rgb(78, 196, 128));">
    <div style="background-color:white; color: black; padding:18px;border-radius:25px;margin:13em">
   <h1 style="text-align:center;">Hall Booking API</h1>
    
        <h2 style="text-align:center;color:green">“Traveling is about the journey, but a good hotel is about the destination.”</h2>
        <a style="margin-left:45%"; href="https://www.booking.com/index.en-gb.html?aid=2336990;label=en-in-booking-desktop-mbA11rPWMJB8q9uMFoHDsQS652804038422:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-55978392763:lp9040217:li:dec:dm;ws=&gad_source=1&gclid=CjwKCAiA_OetBhAtEiwAPTeQZ4LIah8Oo_4eK1w4gN91ObyUIpMLqAAqx5hA-20AEFhVPqv2SPIq2BoCV0YQAvD_BwE" target="_blank">Book now</a>     
            
    </div>
    </body>`)}
    catch(error){
        res.status(500).send("Internal Server Error")
    }
     
    
}
export default { homePage }