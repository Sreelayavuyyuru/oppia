// Copyright 2021 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Component for skill editor save modal.
 */

import { ChangeDetectorRef, Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmOrCancelModal } from 'components/common-layout-directives/common-elements/confirm-or-cancel-modal.component';
import { AppConstants } from 'app.constants';

@Component({
  selector: 'skill-editor-save-modal',
  templateUrl: './skill-editor-save-modal.component.html'
})
export class SkillEditorSaveModalComponent extends ConfirmOrCancelModal {
  // These properties are initialized using Angular lifecycle hooks
  // and we need to do non-null assertion, for more information see
  // https://github.com/oppia/oppia/wiki/Guide-on-defining-types#ts-7-1
  commitMessage!: string;
  MAX_COMMIT_MESSAGE_LENGTH: number = AppConstants.MAX_COMMIT_MESSAGE_LENGTH;

  constructor(
    private ngbActiveModal: NgbActiveModal,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    super(ngbActiveModal);
  }

  updateSaveDraftButton(): void {
    this.changeDetectorRef.detectChanges();
  }
}
