import AppVersion from "../models/AppVersion.js";

export const getVersion = async(req,res)=>{

    try{

        const version =
            await AppVersion.findOne();

        res.status(200).json(version);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};

export const updateApk = async(req,res)=>{

    try{

        const {
            apkUrl,
            message
        } = req.body;

        let version =
            await AppVersion.findOne();

        if(!version){

            version =
                await AppVersion.create({

                    latestVersion:1,

                    apkUrl,

                    message
                });

            return res.status(200).json(version);
        }

        version.latestVersion += 1;

        version.apkUrl = apkUrl;

        version.message = message;

        await version.save();

        res.status(200).json(version);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });
    }
};