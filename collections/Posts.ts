import type { CollectionConfig } from "payload";

export const Post: CollectionConfig = {
	slug: "post",
	access: {
		read: () => true,
	},
	fields: [
		{
			name: "title",
			type: "text",
			required: true,
		},
		{
			name: "slug",
			type: "text",
			required: true,
			unique: true,
		},
		{
			name: "content",
			type: "richText",
			required: true,
		},
		{
			name: "coverImage",
			type: "upload",
			relationTo: "media",
		},
		{
			name: "author",
			type: "text",
			defaultValue: "Prime",

			admin: {
				readOnly: true,
			},
		},
	],
	timestamps: true,
};
