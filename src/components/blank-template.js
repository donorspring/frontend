import { React, Component} from 'react'; 
import EmailEditor from 'react-email-editor'; 

class BlankTemplate extends Component {
    render() {
      return <div>
        <EmailEditor
          ref={editor => this.editor = editor}
        />
      </div>
    }
  }

export default BlankTemplate; 