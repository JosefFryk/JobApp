import express from 'express'
const router = express.Router()

import {getAllJobs, createJob, updateJob, deleteJob, showStats} from  '../controllers/jobs.js'

router.route('/').post(createJob).get(getAllJobs)
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteJob).patch(updateJob)

export default router

