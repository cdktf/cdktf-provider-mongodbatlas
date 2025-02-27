# `privatelinkEndpointServiceServerless` Submodule <a name="`privatelinkEndpointServiceServerless` Submodule" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatelinkEndpointServiceServerless <a name="PrivatelinkEndpointServiceServerless" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless mongodbatlas_privatelink_endpoint_service_serverless}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_serverless

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_id: str,
  instance_name: str,
  project_id: str,
  provider_name: str,
  cloud_provider_endpoint_id: str = None,
  comment: str = None,
  id: str = None,
  private_endpoint_ip_address: str = None,
  timeouts: PrivatelinkEndpointServiceServerlessTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#endpoint_id PrivatelinkEndpointServiceServerless#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#instance_name PrivatelinkEndpointServiceServerless#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#project_id PrivatelinkEndpointServiceServerless#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#provider_name PrivatelinkEndpointServiceServerless#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.cloudProviderEndpointId">cloud_provider_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#cloud_provider_endpoint_id PrivatelinkEndpointServiceServerless#cloud_provider_endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#comment PrivatelinkEndpointServiceServerless#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#id PrivatelinkEndpointServiceServerless#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.privateEndpointIpAddress">private_endpoint_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#private_endpoint_ip_address PrivatelinkEndpointServiceServerless#private_endpoint_ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.endpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#endpoint_id PrivatelinkEndpointServiceServerless#endpoint_id}.

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#instance_name PrivatelinkEndpointServiceServerless#instance_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#project_id PrivatelinkEndpointServiceServerless#project_id}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.providerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#provider_name PrivatelinkEndpointServiceServerless#provider_name}.

---

##### `cloud_provider_endpoint_id`<sup>Optional</sup> <a name="cloud_provider_endpoint_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.cloudProviderEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#cloud_provider_endpoint_id PrivatelinkEndpointServiceServerless#cloud_provider_endpoint_id}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#comment PrivatelinkEndpointServiceServerless#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#id PrivatelinkEndpointServiceServerless#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_endpoint_ip_address`<sup>Optional</sup> <a name="private_endpoint_ip_address" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.privateEndpointIpAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#private_endpoint_ip_address PrivatelinkEndpointServiceServerless#private_endpoint_ip_address}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#timeouts PrivatelinkEndpointServiceServerless#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetCloudProviderEndpointId">reset_cloud_provider_endpoint_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetPrivateEndpointIpAddress">reset_private_endpoint_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#create PrivatelinkEndpointServiceServerless#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#delete PrivatelinkEndpointServiceServerless#delete}.

---

##### `reset_cloud_provider_endpoint_id` <a name="reset_cloud_provider_endpoint_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetCloudProviderEndpointId"></a>

```python
def reset_cloud_provider_endpoint_id() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_private_endpoint_ip_address` <a name="reset_private_endpoint_ip_address" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetPrivateEndpointIpAddress"></a>

```python
def reset_private_endpoint_ip_address() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PrivatelinkEndpointServiceServerless resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_serverless

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_serverless

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_serverless

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_serverless

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PrivatelinkEndpointServiceServerless resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PrivatelinkEndpointServiceServerless to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PrivatelinkEndpointServiceServerless that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivatelinkEndpointServiceServerless to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateLinkServiceResourceId">private_link_service_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference">PrivatelinkEndpointServiceServerlessTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointIdInput">cloud_provider_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointIdInput">endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddressInput">private_endpoint_ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerNameInput">provider_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointId">cloud_provider_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddress">private_endpoint_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerName">provider_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `private_link_service_resource_id`<sup>Required</sup> <a name="private_link_service_resource_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateLinkServiceResourceId"></a>

```python
private_link_service_resource_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeouts"></a>

```python
timeouts: PrivatelinkEndpointServiceServerlessTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference">PrivatelinkEndpointServiceServerlessTimeoutsOutputReference</a>

---

##### `cloud_provider_endpoint_id_input`<sup>Optional</sup> <a name="cloud_provider_endpoint_id_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointIdInput"></a>

```python
cloud_provider_endpoint_id_input: str
```

- *Type:* str

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `endpoint_id_input`<sup>Optional</sup> <a name="endpoint_id_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointIdInput"></a>

```python
endpoint_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `private_endpoint_ip_address_input`<sup>Optional</sup> <a name="private_endpoint_ip_address_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddressInput"></a>

```python
private_endpoint_ip_address_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `provider_name_input`<sup>Optional</sup> <a name="provider_name_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerNameInput"></a>

```python
provider_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PrivatelinkEndpointServiceServerlessTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>]

---

##### `cloud_provider_endpoint_id`<sup>Required</sup> <a name="cloud_provider_endpoint_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.cloudProviderEndpointId"></a>

```python
cloud_provider_endpoint_id: str
```

- *Type:* str

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `private_endpoint_ip_address`<sup>Required</sup> <a name="private_endpoint_ip_address" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.privateEndpointIpAddress"></a>

```python
private_endpoint_ip_address: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerless.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatelinkEndpointServiceServerlessConfig <a name="PrivatelinkEndpointServiceServerlessConfig" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_serverless

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  endpoint_id: str,
  instance_name: str,
  project_id: str,
  provider_name: str,
  cloud_provider_endpoint_id: str = None,
  comment: str = None,
  id: str = None,
  private_endpoint_ip_address: str = None,
  timeouts: PrivatelinkEndpointServiceServerlessTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.endpointId">endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#endpoint_id PrivatelinkEndpointServiceServerless#endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#instance_name PrivatelinkEndpointServiceServerless#instance_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#project_id PrivatelinkEndpointServiceServerless#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.providerName">provider_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#provider_name PrivatelinkEndpointServiceServerless#provider_name}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.cloudProviderEndpointId">cloud_provider_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#cloud_provider_endpoint_id PrivatelinkEndpointServiceServerless#cloud_provider_endpoint_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#comment PrivatelinkEndpointServiceServerless#comment}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#id PrivatelinkEndpointServiceServerless#id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.privateEndpointIpAddress">private_endpoint_ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#private_endpoint_ip_address PrivatelinkEndpointServiceServerless#private_endpoint_ip_address}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#endpoint_id PrivatelinkEndpointServiceServerless#endpoint_id}.

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#instance_name PrivatelinkEndpointServiceServerless#instance_name}.

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#project_id PrivatelinkEndpointServiceServerless#project_id}.

---

##### `provider_name`<sup>Required</sup> <a name="provider_name" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.providerName"></a>

```python
provider_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#provider_name PrivatelinkEndpointServiceServerless#provider_name}.

---

##### `cloud_provider_endpoint_id`<sup>Optional</sup> <a name="cloud_provider_endpoint_id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.cloudProviderEndpointId"></a>

```python
cloud_provider_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#cloud_provider_endpoint_id PrivatelinkEndpointServiceServerless#cloud_provider_endpoint_id}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#comment PrivatelinkEndpointServiceServerless#comment}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#id PrivatelinkEndpointServiceServerless#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `private_endpoint_ip_address`<sup>Optional</sup> <a name="private_endpoint_ip_address" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.privateEndpointIpAddress"></a>

```python
private_endpoint_ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#private_endpoint_ip_address PrivatelinkEndpointServiceServerless#private_endpoint_ip_address}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessConfig.property.timeouts"></a>

```python
timeouts: PrivatelinkEndpointServiceServerlessTimeouts
```

- *Type:* <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#timeouts PrivatelinkEndpointServiceServerless#timeouts}

---

### PrivatelinkEndpointServiceServerlessTimeouts <a name="PrivatelinkEndpointServiceServerlessTimeouts" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_serverless

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#create PrivatelinkEndpointServiceServerless#create}. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#delete PrivatelinkEndpointServiceServerless#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#create PrivatelinkEndpointServiceServerless#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.28.0/docs/resources/privatelink_endpoint_service_serverless#delete PrivatelinkEndpointServiceServerless#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatelinkEndpointServiceServerlessTimeoutsOutputReference <a name="PrivatelinkEndpointServiceServerlessTimeoutsOutputReference" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import privatelink_endpoint_service_serverless

privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PrivatelinkEndpointServiceServerlessTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-mongodbatlas.privatelinkEndpointServiceServerless.PrivatelinkEndpointServiceServerlessTimeouts">PrivatelinkEndpointServiceServerlessTimeouts</a>]

---



