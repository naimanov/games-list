import React from 'react';

function NoGameMessage() {
  return (
    <div className='message-container'>
      <p className='message'>
        Список игр пуст. Нажмите кнопку "Загрузить" для загрузки
        предустановленного списка игр, либо кнопку "Добавить" для добаления
        игры.
      </p>
    </div>
  );
}

export default NoGameMessage;
