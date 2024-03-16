// https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkPeeringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#accepter_region_name NetworkPeering#accepter_region_name}
  */
  readonly accepterRegionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#atlas_cidr_block NetworkPeering#atlas_cidr_block}
  */
  readonly atlasCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#atlas_gcp_project_id NetworkPeering#atlas_gcp_project_id}
  */
  readonly atlasGcpProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#atlas_vpc_name NetworkPeering#atlas_vpc_name}
  */
  readonly atlasVpcName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#aws_account_id NetworkPeering#aws_account_id}
  */
  readonly awsAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#azure_directory_id NetworkPeering#azure_directory_id}
  */
  readonly azureDirectoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#azure_subscription_id NetworkPeering#azure_subscription_id}
  */
  readonly azureSubscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#container_id NetworkPeering#container_id}
  */
  readonly containerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#gcp_project_id NetworkPeering#gcp_project_id}
  */
  readonly gcpProjectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#id NetworkPeering#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#network_name NetworkPeering#network_name}
  */
  readonly networkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#project_id NetworkPeering#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#provider_name NetworkPeering#provider_name}
  */
  readonly providerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#resource_group_name NetworkPeering#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#route_table_cidr_block NetworkPeering#route_table_cidr_block}
  */
  readonly routeTableCidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#vnet_name NetworkPeering#vnet_name}
  */
  readonly vnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#vpc_id NetworkPeering#vpc_id}
  */
  readonly vpcId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering mongodbatlas_network_peering}
*/
export class NetworkPeering extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mongodbatlas_network_peering";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkPeering resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkPeering to import
  * @param importFromId The id of the existing NetworkPeering that should be imported. Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkPeering to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mongodbatlas_network_peering", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.15.2/docs/resources/network_peering mongodbatlas_network_peering} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkPeeringConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkPeeringConfig) {
    super(scope, id, {
      terraformResourceType: 'mongodbatlas_network_peering',
      terraformGeneratorMetadata: {
        providerName: 'mongodbatlas',
        providerVersion: '1.15.2',
        providerVersionConstraint: '~> 1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accepterRegionName = config.accepterRegionName;
    this._atlasCidrBlock = config.atlasCidrBlock;
    this._atlasGcpProjectId = config.atlasGcpProjectId;
    this._atlasVpcName = config.atlasVpcName;
    this._awsAccountId = config.awsAccountId;
    this._azureDirectoryId = config.azureDirectoryId;
    this._azureSubscriptionId = config.azureSubscriptionId;
    this._containerId = config.containerId;
    this._gcpProjectId = config.gcpProjectId;
    this._id = config.id;
    this._networkName = config.networkName;
    this._projectId = config.projectId;
    this._providerName = config.providerName;
    this._resourceGroupName = config.resourceGroupName;
    this._routeTableCidrBlock = config.routeTableCidrBlock;
    this._vnetName = config.vnetName;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepter_region_name - computed: true, optional: true, required: false
  private _accepterRegionName?: string; 
  public get accepterRegionName() {
    return this.getStringAttribute('accepter_region_name');
  }
  public set accepterRegionName(value: string) {
    this._accepterRegionName = value;
  }
  public resetAccepterRegionName() {
    this._accepterRegionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accepterRegionNameInput() {
    return this._accepterRegionName;
  }

  // atlas_cidr_block - computed: true, optional: true, required: false
  private _atlasCidrBlock?: string; 
  public get atlasCidrBlock() {
    return this.getStringAttribute('atlas_cidr_block');
  }
  public set atlasCidrBlock(value: string) {
    this._atlasCidrBlock = value;
  }
  public resetAtlasCidrBlock() {
    this._atlasCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atlasCidrBlockInput() {
    return this._atlasCidrBlock;
  }

  // atlas_gcp_project_id - computed: true, optional: true, required: false
  private _atlasGcpProjectId?: string; 
  public get atlasGcpProjectId() {
    return this.getStringAttribute('atlas_gcp_project_id');
  }
  public set atlasGcpProjectId(value: string) {
    this._atlasGcpProjectId = value;
  }
  public resetAtlasGcpProjectId() {
    this._atlasGcpProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atlasGcpProjectIdInput() {
    return this._atlasGcpProjectId;
  }

  // atlas_id - computed: true, optional: false, required: false
  public get atlasId() {
    return this.getStringAttribute('atlas_id');
  }

  // atlas_vpc_name - computed: true, optional: true, required: false
  private _atlasVpcName?: string; 
  public get atlasVpcName() {
    return this.getStringAttribute('atlas_vpc_name');
  }
  public set atlasVpcName(value: string) {
    this._atlasVpcName = value;
  }
  public resetAtlasVpcName() {
    this._atlasVpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atlasVpcNameInput() {
    return this._atlasVpcName;
  }

  // aws_account_id - computed: true, optional: true, required: false
  private _awsAccountId?: string; 
  public get awsAccountId() {
    return this.getStringAttribute('aws_account_id');
  }
  public set awsAccountId(value: string) {
    this._awsAccountId = value;
  }
  public resetAwsAccountId() {
    this._awsAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccountIdInput() {
    return this._awsAccountId;
  }

  // azure_directory_id - computed: true, optional: true, required: false
  private _azureDirectoryId?: string; 
  public get azureDirectoryId() {
    return this.getStringAttribute('azure_directory_id');
  }
  public set azureDirectoryId(value: string) {
    this._azureDirectoryId = value;
  }
  public resetAzureDirectoryId() {
    this._azureDirectoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDirectoryIdInput() {
    return this._azureDirectoryId;
  }

  // azure_subscription_id - computed: true, optional: true, required: false
  private _azureSubscriptionId?: string; 
  public get azureSubscriptionId() {
    return this.getStringAttribute('azure_subscription_id');
  }
  public set azureSubscriptionId(value: string) {
    this._azureSubscriptionId = value;
  }
  public resetAzureSubscriptionId() {
    this._azureSubscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSubscriptionIdInput() {
    return this._azureSubscriptionId;
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // container_id - computed: false, optional: false, required: true
  private _containerId?: string; 
  public get containerId() {
    return this.getStringAttribute('container_id');
  }
  public set containerId(value: string) {
    this._containerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // error_state - computed: true, optional: false, required: false
  public get errorState() {
    return this.getStringAttribute('error_state');
  }

  // error_state_name - computed: true, optional: false, required: false
  public get errorStateName() {
    return this.getStringAttribute('error_state_name');
  }

  // gcp_project_id - computed: true, optional: true, required: false
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  public resetGcpProjectId() {
    this._gcpProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // network_name - computed: true, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // peer_id - computed: true, optional: false, required: false
  public get peerId() {
    return this.getStringAttribute('peer_id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // resource_group_name - computed: true, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // route_table_cidr_block - computed: true, optional: true, required: false
  private _routeTableCidrBlock?: string; 
  public get routeTableCidrBlock() {
    return this.getStringAttribute('route_table_cidr_block');
  }
  public set routeTableCidrBlock(value: string) {
    this._routeTableCidrBlock = value;
  }
  public resetRouteTableCidrBlock() {
    this._routeTableCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableCidrBlockInput() {
    return this._routeTableCidrBlock;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_name - computed: true, optional: false, required: false
  public get statusName() {
    return this.getStringAttribute('status_name');
  }

  // vnet_name - computed: true, optional: true, required: false
  private _vnetName?: string; 
  public get vnetName() {
    return this.getStringAttribute('vnet_name');
  }
  public set vnetName(value: string) {
    this._vnetName = value;
  }
  public resetVnetName() {
    this._vnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetNameInput() {
    return this._vnetName;
  }

  // vpc_id - computed: true, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accepter_region_name: cdktf.stringToTerraform(this._accepterRegionName),
      atlas_cidr_block: cdktf.stringToTerraform(this._atlasCidrBlock),
      atlas_gcp_project_id: cdktf.stringToTerraform(this._atlasGcpProjectId),
      atlas_vpc_name: cdktf.stringToTerraform(this._atlasVpcName),
      aws_account_id: cdktf.stringToTerraform(this._awsAccountId),
      azure_directory_id: cdktf.stringToTerraform(this._azureDirectoryId),
      azure_subscription_id: cdktf.stringToTerraform(this._azureSubscriptionId),
      container_id: cdktf.stringToTerraform(this._containerId),
      gcp_project_id: cdktf.stringToTerraform(this._gcpProjectId),
      id: cdktf.stringToTerraform(this._id),
      network_name: cdktf.stringToTerraform(this._networkName),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_name: cdktf.stringToTerraform(this._providerName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      route_table_cidr_block: cdktf.stringToTerraform(this._routeTableCidrBlock),
      vnet_name: cdktf.stringToTerraform(this._vnetName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepter_region_name: {
        value: cdktf.stringToHclTerraform(this._accepterRegionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atlas_cidr_block: {
        value: cdktf.stringToHclTerraform(this._atlasCidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atlas_gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._atlasGcpProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atlas_vpc_name: {
        value: cdktf.stringToHclTerraform(this._atlasVpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_account_id: {
        value: cdktf.stringToHclTerraform(this._awsAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_directory_id: {
        value: cdktf.stringToHclTerraform(this._azureDirectoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_subscription_id: {
        value: cdktf.stringToHclTerraform(this._azureSubscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_id: {
        value: cdktf.stringToHclTerraform(this._containerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project_id: {
        value: cdktf.stringToHclTerraform(this._gcpProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_name: {
        value: cdktf.stringToHclTerraform(this._networkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_cidr_block: {
        value: cdktf.stringToHclTerraform(this._routeTableCidrBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vnet_name: {
        value: cdktf.stringToHclTerraform(this._vnetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
