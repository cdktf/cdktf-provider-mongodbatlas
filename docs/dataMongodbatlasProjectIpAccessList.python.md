# `dataMongodbatlasProjectIpAccessList` Submodule <a name="`dataMongodbatlasProjectIpAccessList` Submodule" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataMongodbatlasProjectIpAccessList <a name="DataMongodbatlasProjectIpAccessList" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList"></a>

Represents a {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list mongodbatlas_project_ip_access_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_project_ip_access_list

dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  aws_security_group: str = None,
  cidr_block: str = None,
  ip_address: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#project_id DataMongodbatlasProjectIpAccessList#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.awsSecurityGroup">aws_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#aws_security_group DataMongodbatlasProjectIpAccessList#aws_security_group}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#cidr_block DataMongodbatlasProjectIpAccessList#cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#ip_address DataMongodbatlasProjectIpAccessList#ip_address}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#project_id DataMongodbatlasProjectIpAccessList#project_id}.

---

##### `aws_security_group`<sup>Optional</sup> <a name="aws_security_group" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.awsSecurityGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#aws_security_group DataMongodbatlasProjectIpAccessList#aws_security_group}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.cidrBlock"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#cidr_block DataMongodbatlasProjectIpAccessList#cidr_block}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.Initializer.parameter.ipAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#ip_address DataMongodbatlasProjectIpAccessList#ip_address}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetAwsSecurityGroup">reset_aws_security_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetCidrBlock">reset_cidr_block</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetIpAddress">reset_ip_address</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_aws_security_group` <a name="reset_aws_security_group" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetAwsSecurityGroup"></a>

```python
def reset_aws_security_group() -> None
```

##### `reset_cidr_block` <a name="reset_cidr_block" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetCidrBlock"></a>

```python
def reset_cidr_block() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataMongodbatlasProjectIpAccessList resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isConstruct"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_project_ip_access_list

dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_project_ip_access_list

dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_project_ip_access_list

dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_project_ip_access_list

dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataMongodbatlasProjectIpAccessList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataMongodbatlasProjectIpAccessList to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataMongodbatlasProjectIpAccessList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataMongodbatlasProjectIpAccessList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.awsSecurityGroupInput">aws_security_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cidrBlockInput">cidr_block_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.awsSecurityGroup">aws_security_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cidrBlock">cidr_block</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `aws_security_group_input`<sup>Optional</sup> <a name="aws_security_group_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.awsSecurityGroupInput"></a>

```python
aws_security_group_input: str
```

- *Type:* str

---

##### `cidr_block_input`<sup>Optional</sup> <a name="cidr_block_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cidrBlockInput"></a>

```python
cidr_block_input: str
```

- *Type:* str

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `aws_security_group`<sup>Required</sup> <a name="aws_security_group" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.awsSecurityGroup"></a>

```python
aws_security_group: str
```

- *Type:* str

---

##### `cidr_block`<sup>Required</sup> <a name="cidr_block" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessList.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataMongodbatlasProjectIpAccessListConfig <a name="DataMongodbatlasProjectIpAccessListConfig" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_mongodbatlas import data_mongodbatlas_project_ip_access_list

dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str,
  aws_security_group: str = None,
  cidr_block: str = None,
  ip_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#project_id DataMongodbatlasProjectIpAccessList#project_id}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.awsSecurityGroup">aws_security_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#aws_security_group DataMongodbatlasProjectIpAccessList#aws_security_group}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.cidrBlock">cidr_block</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#cidr_block DataMongodbatlasProjectIpAccessList#cidr_block}. |
| <code><a href="#@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#ip_address DataMongodbatlasProjectIpAccessList#ip_address}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#project_id DataMongodbatlasProjectIpAccessList#project_id}.

---

##### `aws_security_group`<sup>Optional</sup> <a name="aws_security_group" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.awsSecurityGroup"></a>

```python
aws_security_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#aws_security_group DataMongodbatlasProjectIpAccessList#aws_security_group}.

---

##### `cidr_block`<sup>Optional</sup> <a name="cidr_block" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.cidrBlock"></a>

```python
cidr_block: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#cidr_block DataMongodbatlasProjectIpAccessList#cidr_block}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-mongodbatlas.dataMongodbatlasProjectIpAccessList.DataMongodbatlasProjectIpAccessListConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mongodb/mongodbatlas/1.14.0/docs/data-sources/project_ip_access_list#ip_address DataMongodbatlasProjectIpAccessList#ip_address}.

---



