// fetch() 

// in the Daigram 
/*
    Internal Details 

    FETCH api 
    web dependent -> browser available hoga to hi hoga , 
    abort controller -> rook sakte ho 
    
    fetch() -> network based request which returns a promise (agar error aya to wo kaha melega -> so wo apko response mein hi milega)
    mdn pr ja kr padhna 

    js engine , memory , call stack -> botttom mein global exectution context hota hai 
    special functions (settimeout -> register karata hai aur usko , task queue mein bhejta hai ,
    and event loop wo dekhta hai ki kahi call stack khali to nahi hai , 
    
    fetch() pehle execute hota hai -> uske liye hi special queue hoti hai , aur isko micro fast queue bolte hai -> priority queue -> fetch queue )

    response = fetch('something') 2 part mein kaam hota hai 
    1) web browser / native node -> netwrok request milti hai -> data jayega ya nahi jayega -> response , rejection -> 
    agar error bhi aya so wo to response hai na wo response mein hi jayega  
    2) Memory min space reserve karta hai data -> onfulfilled [] -> promise ka resolution , resolve 
                                                onRejection [] -> rejection 
            basically pehle data mein store hota hai -> i.e onFullfilled aur onRejection mein jo ki user ko accessible nahi hai , par humare pass ata hai response 
            
*/