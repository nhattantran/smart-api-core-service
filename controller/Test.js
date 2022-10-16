import { PythonShell } from "python-shell"
import JSON5 from 'json5'
import rimraf from "rimraf"
import fs from 'fs'

const dir = "./upload"

const emptyAndMakeDir = (dir) => {
    rimraf.sync(dir) //Empty dir
    //Remake dir for others
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    pythonPath: './python-interpreter/venv/Scripts/python.exe'
}
export const Test = async (req, res, next) => {
    const request = [{
        name: "tân",
        age: "1'2"
    }]
    console.log(req);
    options.args = [JSON.stringify(request)]
    try {
        PythonShell.run('./controller/script.py', options, async (err, result) => {
            if (err) {
                res.status(400).json({
                    err: err.stack,
                    message: "Compiled failed"
                })
                emptyAndMakeDir(dir);
            } else {
                try {
                    const response = JSON5.parse(result[result.length - 1])
                    res.status(200).json(response)
                    emptyAndMakeDir(dir)
                } catch (e) {
                    res.status(400).json({
                        err: e.message,
                        message: "Compiled failed due to your JSON response error"
                    })
                }
            }
        })
    } catch (e) {
        res.status(500).json({
            message: "Internal server error",
            err: e.message
        })
    }
}