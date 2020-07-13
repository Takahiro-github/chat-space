$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="chat-main__message-list__message" data-message-id=${message.id}>
          <div class="chat-main__message-list__history">
            <div class="chat-main__message-list__history__name">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__history__time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message-list__history-text">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
        `<div class="chat-main__message-list__message" data-message-id=${message.id}>
          <div class="chat-main__message-list__history">
            <div class="chat-main__message-list__history__name">
              ${message.user_name}
            </div>
            <div class="chat-main__message-list__history__time">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message-list__history-text">
            <p class="Message__content">
              ${message.content}
            </p>
          </div>
        </div>`
        return html;
    };
  }
  $(".Form").on("submit", function(e){
    e.preventDefault()
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main__message-list').append(html);
      $('form')[0].reset();
      $('.chat-main__message-list').animate({ scrollTop: $('.chat-main__message-list')[0].scrollHeight});
      //return false; でも連続送信可能
      $('.chat-main__message-form__send').prop('disabled',false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});