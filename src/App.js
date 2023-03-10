import { v4 as uuidv4} from 'uuid'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import Feedbacklist from './components/Feedbacklist'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPages'
function App(){
    const [feedback, setFeedback] = useState(FeedbackData)
    
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4;
        setFeedback([newFeedback,...feedback])
    }
    
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you eant to delete?')){
        setFeedback(feedback.filter((item) => item.id !== id))
        }
    }
    return(
        <Router>
            <Header />
                <div className='container'>
                <Route exact path='/'>
                  <FeedbackForm handleAdd={addFeedback}/>
                  <FeedbackStats feedback={feedback}/>
                  <Feedbacklist feedback={feedback} handleDelete={deleteFeedback}/>
                </Route>

                <Route path='/about' component={AboutPage} />
            </div>
        </Router>
    )
}

export default App