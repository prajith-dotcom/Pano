import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ITicket } from '../../../../../pan-typings/ticket';
import { IAction } from '../../../../../pan-typings/action';
import { IQuestion } from '../../../../../pan-typings/questionnaire';
import { PanoramaQ as Q } from '../../../services/q.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'pan-questionnaire',
  templateUrl: './pan-questionnaire.component.html',
  styleUrls: ['./pan-questionnaire.component.scss'],
})
export class PanQuestionnaireComponent implements OnInit {
  private _ticket: ITicket;
  private _action: IAction;
  questionAnswers: any = {};
  displayedQuestion: IQuestion;
  user = UserService.isLoggedIn();

  @Output() ticketEvent = new EventEmitter<ITicket>();

  @Output() stateChange = new EventEmitter<any>();

  @Input()
  get ticket(): ITicket {
    return this._ticket;
  }

  set ticket(data: ITicket) {
    this._ticket = data;
    this.ticketEvent.emit(this._ticket);
  }

  constructor() { }

  ngOnInit(): void {
    const requestData = { questionCode: '0', answer: '' };

    Q.questions.post(requestData)
      .subscribe(
        q => this.displayedQuestion = q,
        err => console.log(err),
      );
  }

  onQuestionSubmit(questionCode: string, answer: string): void {
    const answerObj = {
      questionCode,
      answer,
    };

    Q.questions.post(answerObj)
      .subscribe(
        (q) => {
          this.displayedQuestion = q;
        },
        err => console.log(err),
        () => {
          if (this.displayedQuestion.question === '') {
            this.generateAction();
          }
        },
      );
  }

  generateAction(): void {
    this._action = {
      actionNumber: (Math.floor(Math.random() * 90000) + 10000).toString(),
      actionCode: '1014',
      actionTime: new Date().toISOString(),
      globalId: this.user.username,
      narrative: 'Add Questionnaire',
      ticketNumber: this.ticket.ticketNumber,
      taskNumber: null,
      statusFlag: '1',
      assignTo: {
        firstName: 'Test',
        lastName: 'User',
        user: {
          code: this.user.username,
          description: this.user.username,
        },
        group: {
          code: '1',
          description: 'RETAIL',
        },
      },
      paramList: Object.keys(this.questionAnswers)
      .reduce((params, qaKey, index) => {
        const answer = this.questionAnswers[qaKey] instanceof Date ?
          this.questionAnswers[qaKey].toISOString() :
          this.questionAnswers[qaKey];
        params.push({
          key: {
            code: (index + 1).toString(),
            description: qaKey,
          },
          value: {
            code: (index + 1).toString(),
            description: answer,
          },
        });
        return params;
      }, []),
      level: {
        code: '01',
        description: 'Add Attributes',
      },
      type: {
        code: '01',
        description: 'Add Attributes',
      },
    };
    this.stateChange.emit(
      {
        state: 'complete',
        action: this._action,
        type: this.questionAnswers['1'],
      },
    );
  }

}
