import React from 'react'

const Question = () => {
  return (
    <section className='question'>
        <div className="container">
            <div className="question-wrapper">
                  <h3>Часто задаваемые вопросы</h3>
                <div className="question-body">
                    <div className="question__title">
                          <p>За нами будет закреплен какой-нибудь IT специалист ?</p>
                          <button>+</button>
                    </div>
                    <div className="question__title">
                          <p>Какие регионы Вы обслуживаете ?</p>
                          <button>+</button>
                    </div>
                    <div className="question__title">
                          <h4>Вы можете предоставлять круглосуточную поддержку ?</h4>
                          <p className='last'>Да, мы можем предоставить расширенный график IT обслуживания и круглосуточную работу нашей технической поддержки для клиентов. Однако мы всегда предупреждаем наших клиентов, что техническая поддержка в графике 24/7 сильно удорожает стоимость договора IT обслуживания.</p>
                          <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Question