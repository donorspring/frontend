import { React, Component } from 'react'; 
import EmailEditor from 'react-email-editor'; 
import Button from '@material-ui/core/Button'; 
import sample2 from './sample2.json'; 

class EmailEdits2 extends Component {
    
    render() {

      return <div>
        <Button variant="contained" onClick={this.saveDesign}>Save Design</Button>
        <Button variant="contained" onClick={this.exportHtml}>Next</Button>

        <EmailEditor
          ref={editor => this.editor = editor}
          onLoad={this.onLoad}
        />
      </div>
    }
    exportHtml = () => {
        this.editor.exportHtml(data => {
          const { design, html } = data
          console.log('exportHtml', html)
        })
    }
    saveDesign = () => {
        this.editor.saveDesign(design => {
        //   console.log('saveDesign', design)
          this.savedDesign = design; 
          console.log(this.savedDesign)
        })
    }

    onLoad = () => {
        // console.log(this.saveDesign); 
        const json = sample2; 
        this.editor.loadDesign(json)
      }
  }

export default EmailEdits2; 