import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';

interface FoodNode {
  name?: any;
  key?: any;
  children?: FoodNode[];
}

const metadata1: FoodNode[] = [
  {
    name: '',
    children: [
      {
        name: '',
        children: [{ key: '' }],
      },
    ],
  },
];

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.scss'],
})
export class NftComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;
  nft1: any = [];
  metadata: any;
  nftDetails: any;
  nftMaindDetails: any;
  searchtext: any = '';
  root: any;

  displayedColumns: string[] = ['traittype', 'value'];
  // dataSource = data;
  public attributes: [] = [];
  public metadata1!: {
    key: number;
  };

  constructor(private api: ApiService) {
    this.dataSource.data = metadata1;

    this.api.serviceCall().subscribe((result) => {
      // this.dataSource.data = result.metadata;
      console.log('result', result);
      if (result) {
        this.loadDependency(result);
      }
    });
    // this.api.getapi(this.searchtext).subscribe((res)=>{
    //   console.log("result 1",res)
    //   if(res){
    //     this.loadDependency(res);
    //   }
    // })
   
  }

  
  

  ngOnInit(): void {}

  loadDependency(data: any) {
    console.log(data);
    this.nftMaindDetails = {
      image:data?.['metadata']['data']['image'],
      nftName: data['metadata']['data']['name'],
      creators: data['onchainMetadata']['data']['creators'],
      tokenId: data['account'],
      mintId: data['tokenInfo']['tokenAuthority'],
      totalSupply: data['tokenInfo']['supply'],
    };
    console.log(this.nftMaindDetails);

    this.metadata = data['metadata'];

    this.attributes = this.metadata['data']['attributes'];

    const metadata = {
      key: data?.['key'],
      mint: data?.['mint'],
      updateAuthority: data?.['updateAuthority'],
      name: data?.['name'],
      symbol: data?.['symbol'],
      uri: data?.['uri'],
      seller_fee_basis_points: data?.['metadata']['data']['seller_fee_basis_points'],
    };

    // console.log(metadata);
    this.metadata1 = metadata;
  }

  onserachtextentered(searchValue: any) {
    this.api.getapi(searchValue).subscribe((res)=>{
      console.log("result 1",res)
      if(res){
        this.loadDependency(res);
      }
    })
    this.searchtext = searchValue;
    // this.searchtext=this.api
   
    console.log(this.searchtext);

  }
  // getNftdetailsbytoken(token:any){
  //   this.user.gettoken(token).subscribe(tokendata=>
  //     console.log(tokendata)
  //     this.nftDetails=token
  //     )
  // }

}
