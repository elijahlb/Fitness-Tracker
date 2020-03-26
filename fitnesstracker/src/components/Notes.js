import React from 'react';

function expandNotes() {

}

function Notes() {
    return (
<div className="col-md-6">
   <button><i class="fas fa-plus-circle"></i></button>
    <form>
          <div className="form-group">
          <label for="exampleFormControlTextarea1 ">Notes</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
    </form>
</div>
    )
    }
    
export default Notes;