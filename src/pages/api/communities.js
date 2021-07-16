import { SiteClient } from 'datocms-client'

export default async function handleRequests(req, res) {
    const model_id = `${process.env.NEXT_PUBLIC_COMMUNITY_MODEL_ID}`
    const token = process.env.NEXT_PUBLIC_CMS_TOKEN
    const client = new SiteClient(token)

    const { method } = req

    switch(method) {
        case 'POST':
            const community = await client.items.create({
                itemType: model_id,
                title: req.body['title'],
                pictureUrl: req.body['pictureUrl']
            })
            return res.json({ community: community })
        case 'GET':
            const allCommunities = await client.items.all({
                nested: 'true',
                'filter[type]': model_id,
                version: 'published'
            })

            return res.json({ communities: allCommunities })
        default:
            return res.status(404).json({ msg: 'Feature not found' })
    }
}