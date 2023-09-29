import { Component } from '@angular/core';
import { Input } from '@angular/core';
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
  }

  // Verify that viewerType is either 'view-model' or 'edit-model'. If not, set it to 'view-model' before creating the viewer.

  validateViewerType() {
    if (this.viewerType !== 'view-model' && this.viewerType !== 'edit-model') {
      this.viewerType = 'view-model';
    }
  }

  checkStyles() {
    if (this.viewerType === 'edit-model') {
      // Hide the 'enlarge-view' button
      const enlargeViewButton = document.querySelector('.enlarge-button');
      if (enlargeViewButton) {
        enlargeViewButton.classList.add('hidden');
      }

      // Set the other two buttons to use the 'primary action' class
      const uploadButton = document.querySelector('.upload-button');
      if (uploadButton) {
        uploadButton.classList.remove('secondary-action');
        uploadButton.classList.add('primary-action');
      }

      const downloadButton = document.querySelector('.download-button');
      if (downloadButton) {
        downloadButton.classList.remove('secondary-action');
        downloadButton.classList.add('primary-action');
      }
    }
  }



}
