var navMain = $("#navbar");
navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
});

var links = document.links;
for (var i = 0, linksLength = links.length; i < linksLength; i++) {
  if (links[i].hostname != window.location.hostname) {
    links[i].target = '_blank';
  }
}

console.log(`
                   .:;rrr;:.    :::::,  ,:::::
               .rG#X;,..,S@@@S  .X@  5   r@  @
             .2@@G.       .2@X   ,@  5    H  @
            ,#@@A           ,r   ,@  5    H  @
            &  @;                ,@  5    H @@;5A#@#As.  .2M#MA.rh##
            #  @,                ,@  5    H @@.   :#@@#,   & @@5;SB@
            B  @:                ,@  5    H  @     ;@  X   G @@.   .
            ;@@@9            ,   ,@  5    H  @     ,@  X   G  @.
             ;@@@i         :AA   ,@  5    H  @     i@@@,   G  @.
              .iM@A;     ,h@@A   :@@@2    H @@.   r@@h,    A@@@,
                 .;i2SiiSX2s;.  ;22222r.  i2222sris:.    .i22222r


                                  Delfino curioso!

                            Like coding? hello@calib.ro
`);
