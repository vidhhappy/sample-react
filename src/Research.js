// Research.js
import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class MyLargeModal extends React.Component {
  render() {
    return (
      <Modal bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>dfdgsfg</h4>
          <p>
           xfgdfhfhgd
          </p>
          </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
class Research extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    
    return <div className="container">

    <div className="content">
    <h1>Research</h1>
    <div className="row">
      <div className="col-sm-1"></div>
      <div className="col-sm-10 mt-2">
    
        <div className="row">
          <div className="col-sm-3">
          <div className="card" >
          <img  className="card-img-top" src="/images/research/research1.png" alt="Integrative cancer genomics"/>                 
              <div className="card-block">
                  <p className="card-text">Integrative cancer genomics</p>                 
              </div>
                
                </div>

            <div className="card">
              
               
                <img  className="card-img-top" src="/images/research/research2.png"  alt="Non-coding mutations"/>
    
                <div className="card-block">
                  <p className="card-text">
                  Non-coding mutations</p>                 
                </div>
              
            </div>
    
            <div className="card">
              
                
                <img  className="card-img-top" src="/images/research/research3.png"  alt="miRNA-target interactions"/>
    
                <div className="card-block">
                  <p className="card-text">
                  miRNA-target interactions</p>                 
                </div>
             
            </div>
         
          
          </div>
          <div className="col">
            <h2> Computational Cancer Genomics</h2>
            <p> We are a computational biology group at Genome Institute of Singapore (GIS). We are particularly interested in developing
              and applying relevant computational and statistical approaches to solve emerging problems in cancer research. To
              accomplish this we work closely with excellent clinical research groups in Singapore and abroad.
            </p>
            <h2>Non-coding Cancer Genome</h2>
            <p>Non-protein-coding regulatory elements and transcripts take up a large fraction of the human genome, but their function
              and disease relevance are not well understood. We use computational approaches to identify and characterize cancer-causing
              non-coding elements from large cohorts of tumor genomes and molecular profiles.
            </p>
            <h2>Tumor Systems Biology</h2>
            <p>Signaling between cancer and non-malignant cells of the tumor microenvironment is critical in many aspects of tumor
              progression. However, there is a lack of approaches to study this phenomenon at scale in tumors. We are developing
              integrated experimental and computational techniques to study tumors at a systems level.
            </p>
          </div>
        </div>
        <div className="col">
        </div>
    
      </div>
    </div>
    </div></div>
    ;
  }
}

export default Research;