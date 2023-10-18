import { Component } from '@angular/core';
import { Input } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-d-viewer',
  templateUrl: './three-d-viewer.component.html',
  styleUrls: ['./three-d-viewer.component.css']
})

export class ThreeDViewerComponent {

  @Input() modelPath: string;
  @Input() viewerType: string;

  constructor() {
    this.modelPath = 'assets/models/scene.gltf';
    this.viewerType = 'view-model';
    this.validateViewerType();
    this.checkStyles();
  }

  validateViewerType() {
    if (this.viewerType !== 'view-model' && this.viewerType !== 'edit-model') {
      this.viewerType = 'view-model';
    }
  }

  checkStyles() {
    if (this.viewerType === 'edit-model') {
      const uploadButton = document.getElementsByClassName('upload-button');
      console.log(uploadButton);
      if (uploadButton.length > 0) {
        uploadButton[0].classList.remove('secondary-action');
        uploadButton[0].classList.add('primary-action');
      }

      const downloadButton = document.getElementsByClassName('download-button');
      if (downloadButton.length > 0) {
        downloadButton[0].classList.remove('secondary-action');
        downloadButton[0].classList.add('primary-action');
      }
    }
  }



}
