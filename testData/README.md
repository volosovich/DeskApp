Template for generate data.json in http://www.json-generator.com/

[
	'{{repeat(5, 7)}}',
	{
      deskName: 'Desk {{index(1)}}',
      deskData:
      [
        '{{repeat(5, 7)}}',
        {
        nameList: 'List {{index(1)}}',
        listCard: 
          [
            '{{repeat(5, 7)}}',
            {
            textCard: '{{lorem()}}',
            dateCard: '{{date()}}'
            }
          ]
        }
      ]
	}
]

